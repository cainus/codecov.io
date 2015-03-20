
module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.SHIPPABLE;
  },

  configuration : function(env){
    // http://docs.shippable.com/en/latest/config.html#common-environment-variables
    if (!env) env = process.env;
    var config = {
      service : 'shippable',
      build : env.BUILD_NUMBER,
      build_url : env.BUILD_URL,
      commit : env.COMMIT,
      branch : env.BRANCH,
      owner : env.REPO_NAME.split('/')[0],
      repo : env.REPO_NAME.split('/')[1]
    };
    if (!!env.PULL_REQUEST && env.PULL_REQUEST !== 'false'){
      config.pull_request = env.PULL_REQUEST;
    }
    return config;
  }

};
