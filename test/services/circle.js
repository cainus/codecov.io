var travis = require("../../lib/services/circle");

describe("circle service", function(){

  it ("can detect circle", function(){
    process.env.CIRCLECI = "true";
    expect(travis.detect()).to.be(true);
  });

  it ("can get circle env info", function(){
    process.env.CIRCLECI = "true";
    process.env.CIRCLE_BUILD_NUM = '1234';
    process.env.CIRCLE_SHA1 = '5678';
    process.env.CIRCLE_BRANCH = 'master';
    expect(travis.configuration()).to.eql({
      service : 'circle',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master'
    });
  });
  it ("can get circle env info with a pull request", function(){
    process.env.CIRCLECI = "true";
    process.env.CIRCLE_BUILD_NUM = '1234';
    process.env.CIRCLE_SHA1 = '5678';
    process.env.CIRCLE_BRANCH = 'master';
    process.env.CIRCLE_PULL_REQUEST = 'blah';
    expect(travis.configuration()).to.eql({
      service : 'circle',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master',
      pullRequest : 'blah',
    });
  });

});
