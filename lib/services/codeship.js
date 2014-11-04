module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return (env.CI_NAME && env.CI_NAME === 'codeship');
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'codeship',
      buildId :  env.CI_BUILD_NUMBER,
      commitId : env.CI_COMMIT_ID,
      build : env.CI_BUILD_NUMBER,
      branch : env.CI_BRANCH
    };
  }

};
