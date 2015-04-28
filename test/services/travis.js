var travis = require("../../lib/services/travis");

describe("travis service", function(){

  it ("can detect travis", function(){
    process.env.TRAVIS = "true";
    expect(travis.detect()).to.be(true);
  });

  it ("can get travis env info", function(){
    process.env.TRAVIS = "true";
    process.env.TRAVIS_JOB_ID = '1234';
    process.env.TRAVIS_COMMIT = '5678';
    process.env.TRAVIS_JOB_NUMBER = '91011';
    process.env.TRAVIS_BRANCH = 'master';
    process.env.TRAVIS_REPO_SLUG = 'owner/repo';
    if (process.env.TRAVIS_PULL_REQUEST) {
      process.env.TRAVIS_PULL_REQUEST = 'false';
    }
    expect(travis.configuration()).to.eql({
      service : 'travis-org',
      commit : '5678',
      build : '91011',
      branch : 'master',
      travis_job_id : '1234',
      owner : 'owner',
      repo : 'repo'
    });
  });
  it ("can get travis env info with a pull request", function(){
    process.env.TRAVIS = "true";
    process.env.TRAVIS_JOB_ID = '1234';
    process.env.TRAVIS_COMMIT = '5678';
    process.env.TRAVIS_JOB_NUMBER = '91011';
    process.env.TRAVIS_BRANCH = 'master';
    process.env.TRAVIS_PULL_REQUEST = 'blah';
    process.env.TRAVIS_REPO_SLUG = 'owner/repo';
    expect(travis.configuration()).to.eql({
      service : 'travis-org',
      commit : '5678',
      build : '91011',
      branch : 'master',
      travis_job_id : '1234',
      pull_request : 'blah',
      owner : 'owner',
      repo : 'repo'
    });
  });

});
