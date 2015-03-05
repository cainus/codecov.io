
module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.SEMAPHORE;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'semaphore',
      build : env.SEMAPHORE_BUILD_NUMBER,
      commit : env.REVISION,
      branch : env.BRANCH_NAME,
      owner : env.SEMAPHORE_REPO_SLUG.split('/')[0],
      repo : env.SEMAPHORE_REPO_SLUG.split('/')[1]
    };
  }

};
