var codeship = require("../../lib/services/codeship");

describe("codeship service", function(){

  it ("can detect codeship", function(){
    process.env.CI_NAME = "codeship";
    expect(codeship.detect()).to.be(true);
  });

  it ("can get codeship env info", function(){
    process.env.CI_BUILD_NUMBER = "1234";
    process.env.CI_COMMIT_ID = "5678";
    process.env.CI_BRANCH = "master";
    expect(codeship.configuration()).to.eql({
      service : 'codeship',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master'
    });
  });

});
