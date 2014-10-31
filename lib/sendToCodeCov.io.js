var request = require('request');
var urlgrey = require('urlgrey');
var getConfiguration = require('./getConfiguration');


// curl example
// curl -X POST -H 'Content-Type: text/lcov' -d 'SF:money.py\nFN:11,(anonymous_1)\nDA:1,1\nDA:2,1\nDA:11,1\nend_of_record' https://codecov.io/upload/v1?token=473c8c5b-10ee-4d83-86c6-bfd72a185a27&commit=743b04806ea677403aa2ff26c6bdeb85005de658&branch=master
//

var sendToCodecov = function(str, cb){
  var withTestTokenUrl = 'https://codecov.io/upload/v1?token=473c8c5b-10ee-4d83-86c6-bfd72a185a27&commit=743b04806ea677403aa2ff26c6bdeb85005de658&branch=master';
  var configuration = getConfiguration();
  console.log("configuration: ", configuration);
  var query = {
    commit : configuration.commitId,
    travis_job_id : configuration.buildId,
    build : configuration.build,
    branch : configuration.branch
  };
  if (!!configuration.pullRequest){
    query.pull_request = configuration.pullRequest;
  }
  if (!!process.env.codecov_token){
    query.token = process.env.codecov_token;
  }

  var url = urlgrey('https://codecov.io/upload/v1').query(query).toString();

  var headers = {
    'content-type' : 'text/lcov'
  };
  var body = str;
  var options = {
    url : url,
    headers : headers,
    body : body
  };
  request.post(options, function(err, response, body){
    if (err){
      return cb(err);
    }
    if (response.statusCode !== 200){
      var error = new Error("non-success response");
      error.detail = {
        statusCode : response.statusCode,
        body : body,
        headers : response.headers
      };
      return cb(error);
    }
    return cb();
  });
};

module.exports = sendToCodecov;
