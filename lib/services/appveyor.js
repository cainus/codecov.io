module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.APPVEYOR;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'appveyor',
      build : env.APPVEYOR_BUILD_NUMBER,
      commit : env.APPVEYOR_REPO_COMMIT,
      branch : env.APPVEYOR_REPO_BRANCH,
      owner : env.APPVEYOR_REPO_NAME.split('/')[0],
      repo : env.APPVEYOR_REPO_NAME.split('/')[1]
    };
  }

};
