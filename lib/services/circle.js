module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.CIRCLECI;
  },

  configuration : function(env){
    if (!env) env = process.env;
    retval = {
      service : 'circle',
      buildId :  env.CIRCLE_BUILD_NUM,
      commitId : env.CIRCLE_SHA1,
      build : env.CIRCLE_BUILD_NUM,
      branch : env.CIRCLE_BRANCH
    };
    if (env.CIRCLE_PULL_REQUEST){
      retval.pullRequest = env.CIRCLE_PULL_REQUEST;
    }
    return retval;
  }

};
