module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.DRONE;
  },

  configuration : function(env){
    if (!env) env = process.env;
    return {
      service : 'drone',
      buildId :  env.DRONE_BUILD_NUMBER,
      commitId : env.DRONE_COMMIT,
      build : env.BUILD_ID,
      branch : env.DRONE_BRANCH
    };
  }

};
