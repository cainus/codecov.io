module.exports = {

  detect : function(env){
    if (!env) env = process.env;
    return !!env.TRAVIS;
  },

  configuration : function(env){
    if (!env) env = process.env;
    var config = {
      service : 'travis-org',
      commit : env.TRAVIS_COMMIT,
      build : env.TRAVIS_JOB_NUMBER,
      branch : env.TRAVIS_BRANCH,
      travis_job_id : env.TRAVIS_JOB_ID,
      owner : env.TRAVIS_REPO_SLUG.split('/')[0],
      repo : env.TRAVIS_REPO_SLUG.split('/')[1]
    };
    if (!!env.TRAVIS_PULL_REQUEST && env.TRAVIS_PULL_REQUEST !== 'false'){
      config.pull_request = env.TRAVIS_PULL_REQUEST;
    }
    return config;
  }

};
