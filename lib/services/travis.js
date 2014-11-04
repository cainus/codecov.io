module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.TRAVIS;
  },

  configuration : function(env){
    if (!env) env = process.env;
    var config = {
      buildId :  env.TRAVIS_JOB_ID,
      commitId : env.TRAVIS_COMMIT,
      build : env.TRAVIS_JOB_NUMBER,
      branch : env.TRAVIS_BRANCH,
      service : 'travis'
    };
    if (!!env.TRAVIS_PULL_REQUEST && env.TRAVIS_PULL_REQUEST !== 'false'){
      config.pullRequest = env.TRAVIS_PULL_REQUEST;
    }
    return config;
  }

};
