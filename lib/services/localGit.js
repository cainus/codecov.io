var execSync = require('exec-sync');

module.exports = {

  configuration : function(){
    var branch = execSync("git rev-parse --abbrev-ref HEAD").trim();
    if (branch === 'HEAD') {
      branch = 'master';
    }
    var head = execSync("git rev-parse HEAD").trim();
    return {
      commit : head,
      branch : branch
    };
  }

};
