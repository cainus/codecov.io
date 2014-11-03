var getConfiguration = require("../lib/getConfiguration");

describe("getConfiguration", function(){

  it ("can get a token passed via env variable (uppercase)", function(){
    process.env.TRAVIS = "true";
    process.env.TRAVIS_JOB_ID = '1234';
    process.env.TRAVIS_COMMIT = '5678';
    process.env.TRAVIS_JOB_NUMBER = '91011';
    process.env.TRAVIS_BRANCH = 'master';
    process.env.CODECOV_TOKEN = 'asdf-asdf-asdf-asdf';
    expect(getConfiguration()).to.eql({
      buildId :  '1234',
      commitId : '5678',
      build : '91011',
      branch : 'master',
      token : 'asdf-asdf-asdf-asdf'
    });
  });
  it ("can get a token passed via env variable (lowercase)", function(){
    process.env.TRAVIS = "true";
    process.env.TRAVIS_JOB_ID = '1234';
    process.env.TRAVIS_COMMIT = '5678';
    process.env.TRAVIS_JOB_NUMBER = '91011';
    process.env.TRAVIS_BRANCH = 'master';
    process.env.codecov_token = 'asdf-asdf-asdf-asdf';
    expect(getConfiguration()).to.eql({
      buildId :  '1234',
      commitId : '5678',
      build : '91011',
      branch : 'master',
      token : 'asdf-asdf-asdf-asdf'
    });
  });

});
