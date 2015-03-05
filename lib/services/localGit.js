var sh = require('execSync');

module.exports = {

  configuration : function(){
    var branch = sh.exec("git rev-parse --abbrev-ref HEAD").stdout.trim();
    if (branch === 'HEAD') {
      branch = 'master';
    }
    var head = sh.exec("git rev-parse HEAD").stdout.trim();
    return {
      commit : head,
      branch : branch
    };
  }

};
