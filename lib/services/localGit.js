var sh = require('execSync');

module.exports = {

  configuration : function(){
    var branch = sh.run("git rev-parse --abbrev-ref HEAD");
    if (branch === 'HEAD') {
      branch = 'master';
    }
    var head = sh.run("git rev-parse HEAD");
    retval = {
      commitId : head,
      branch : branch
    };
    return retval;
  }

};
