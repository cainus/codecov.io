module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.APPVEYOR;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'appveyor',
      buildId :  env.APPVEYOR_BUILD_NUMBER,
      commitId : env.APPVEYOR_REPO_COMMIT,
      build : env.APPVEYOR_BUILD_NUMBER,
      branch : env.APPVEYOR_REPO_BRANCH
    };
  }

};
