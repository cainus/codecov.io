var services = {
  'travis' : require('./services/travis'),
  'circle' : require('./services/circle'),
  'codeship' : require('./services/codeship'),
  'drone' : require('./services/drone'),
  'jenkins' : require('./services/jenkins'),
  'semaphore' : require('./services/semaphore')
};

module.exports = function(){
  for (var name in services){
    if (services[name].detect()){
      return services[name].configuration();
    }
  }
  throw new Error("unknown service.  could not get configuration");
};
