var jenkins = require("../../lib/services/jenkins");

describe("jenkins service", function(){

  it ("can detect jenkins", function(){
    process.env.JENKINS_URL = "http://jenkins.jenkins.example/";
    expect(jenkins.detect()).to.be(true);
  });

  it ("can get service env info", function(){
    process.env.BUILD_NUMBER = '1234';
    process.env.BUILD_URL = 'http://asdf/';
    process.env.GIT_COMMIT = '5678';
    process.env.GIT_BRANCH = 'master';
    process.env.WORKSPACE = '/var/lib/jenkins/workspace';
    expect(jenkins.configuration()).to.eql({
      service : 'jenkins',
      build_url : 'http://asdf/',
      build : '1234',
      commit : '5678',
      root : '/var/lib/jenkins/workspace',
      pull_request : undefined,
      branch : 'master'
    });
  });

  it ("github pull request env variables win out over jenkins variables", function(){
    process.env.BUILD_NUMBER = '1234';
    process.env.BUILD_URL = 'http://asdf/';
    process.env.GIT_COMMIT = '5678';
    process.env.ghprbActualCommit = '8765';
    process.env.GIT_BRANCH = 'master';
    process.env.ghprbSourceBranch = 'retsam';
    process.env.ghprbPullId = '1111';
    process.env.WORKSPACE = '/var/lib/jenkins/workspace';
    expect(jenkins.configuration()).to.eql({
      service : 'jenkins',
      build_url : 'http://asdf/',
      build : '1234',
      commit : '8765',
      root : '/var/lib/jenkins/workspace',
      pull_request : '1111',
      branch : 'retsam'
    });
  });
});
