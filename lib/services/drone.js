module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.DRONE;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      buildId :  env.DRONE_BUILD_NUMBER,
      commitId : env.DRONE_COMMIT,
      branch : env.DRONE_BRANCH
    };
  }

};
