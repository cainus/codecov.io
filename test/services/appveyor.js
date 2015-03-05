var appveyor = require("../../lib/services/appveyor");

describe("appveyor service", function(){

  it ("can detect appveyor", function(){
    process.env.APPVEYOR = "true";
    expect(appveyor.detect()).to.be(true);
  });

  it ("can get appveyor env info", function(){
    process.env.APPVEYOR_BUILD_NUMBER = "1234";
    process.env.APPVEYOR_REPO_COMMIT = "5678";
    process.env.APPVEYOR_REPO_BRANCH = "master";
    expect(appveyor.configuration()).to.eql({
      service : 'appveyor',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master'
    });
  });

});
