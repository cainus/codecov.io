module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.CIRCLECI;
  },

  configuration : function(env){
    if (!env) env = process.env;
    retval = {
      service : 'circle',
      build : env.CIRCLE_BUILD_NUM,
      commit : env.CIRCLE_SHA1,
      branch : env.CIRCLE_BRANCH,
      owner : env.CIRCLE_PROJECT_USERNAME,
      repo : env.CIRCLE_PROJECT_REPONAME,
    };
    if (env.CIRCLE_PULL_REQUEST){
      retval.pull_request = env.CIRCLE_PULL_REQUEST;
    }
    return retval;
  }

};
