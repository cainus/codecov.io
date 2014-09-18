var request = require('request');
var urlgrey = require('urlgrey');


// curl example
// curl -X POST -H 'Content-Type: text/lcov' -d 'SF:money.py\nFN:11,(anonymous_1)\nDA:1,1\nDA:2,1\nDA:11,1\nend_of_record' https://codecov.io/upload/v1?token=473c8c5b-10ee-4d83-86c6-bfd72a185a27&commit=743b04806ea677403aa2ff26c6bdeb85005de658&branch=master
//

var sendToCodecov = function(str, cb){
  var withTestTokenUrl = 'https://codecov.io/upload/v1?token=473c8c5b-10ee-4d83-86c6-bfd72a185a27&commit=743b04806ea677403aa2ff26c6bdeb85005de658&branch=master';
  var query = {
    commit : process.env.TRAVIS_COMMIT,
    travis_job_id : process.env.TRAVIS_JOB_ID,
    branch : process.env.TRAVIS_BRANCH
  };
  if (!!process.env.TRAVIS_PULL_REQUEST && process.env.TRAVIS_PULL_REQUEST !== 'false'){
    query.pull_request = process.env.TRAVIS_PULL_REQUEST;
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
    console.log("argz: ", arguments);
    cb(err, response, body);
  });
};

module.exports = sendToCodecov;
