module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.JENKINS_URL;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      buildId :  env.BUILD_ID,
      commitId : env.GIT_COMMIT,
      branch : env.GIT_BRANCH
    };
  }

};
