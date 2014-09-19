module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.CIRCLECI;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      buildId :  env.CIRCLE_BUILD_NUM,
      commitId : env.CIRCLE_SHA1,
      branch : env.CIRCLE_BRANCH
    };
  }

};
