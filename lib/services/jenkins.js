module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.JENKINS_URL;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      root : env.WORKSPACE,
      service : 'jenkins',
      buildId :  env.BUILD_NUMBER,
      buildUrl :  env.BUILD_URL,
      commitId : env.GIT_COMMIT,
      branch : env.GIT_BRANCH
    };
  }

};
