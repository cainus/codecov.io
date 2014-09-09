sendToCodeCov = require('./sendToCodeCov.io');


module.exports = handleInput = function(input, cb){
  sendToCodeCov(input, function(err, response, body){
    if (err){
      return cb(err);
    }
    if (response.statusCode !== 200){
      var error = new Error("non-success response");
      error.response = response;
      error.body = body;
      return cb(error);
    }
    return cb();
  });
};
