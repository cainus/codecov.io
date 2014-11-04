
module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.SEMAPHORE;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'semaphore',
      buildId :  env.SEMAPHORE_BUILD_NUMBER,
      commitId : env.SEMAPHORE_PROJECT_HASH_ID,
      build : env.SEMAPHORE_BUILD_NUMBER,
      branch : env.BRANCH_NAME
    };
  }

};
