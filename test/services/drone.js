var drone = require("../../lib/services/drone");

describe("drone service", function(){

  it ("can detect drone", function(){
    process.env.DRONE = "true";
    expect(drone.detect()).to.be(true);
  });

  it ("can get drone env info", function(){
    process.env.DRONE_BUILD_NUMBER = "1234";
    process.env.DRONE_COMMIT = "5678";
    process.env.DRONE_BRANCH = "master";
    expect(drone.configuration()).to.eql({
      service : 'drone',
      buildId :  '1234',
      commitId : '5678',
      build : '1234',
      branch : 'master'
    });
  });

});
