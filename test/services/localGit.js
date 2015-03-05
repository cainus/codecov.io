var local = require("../../lib/services/localGit");

describe("localGit service", function(){

  it ("can get commit", function(){
    expect(local.configuration().commit).to.match(/^\w{40}$/);
  });

  it ("can get branch", function(){
    expect(local.configuration().branch).to.match(/^[\w\-\:]{1,50}$/);
  });

});
