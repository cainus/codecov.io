var local = require("../../lib/services/localGit");

describe("localGit service", function(){

  it ("can get commitId", function(){
    expect(local.configuration().commitId).to.match(/^\w{40}$/);
  });

  it ("can get branch", function(){
    expect(local.configuration().branch).to.match(/^[\w\-\:]{1,50}$/);
  });

});
