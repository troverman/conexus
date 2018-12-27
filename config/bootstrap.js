
module.exports.bootstrap = function(cb) {

  sails.services.passport.loadStrategies();

  //intervalService.getData();
  //dataService.getData();

  //dataService.reputationBuild();

  dataService.traverse();

  //DEF PRE ALPHA. 
  setInterval(intervalService.universalTokenProtocolPreAlpha, 8640000);

  setInterval(dataService.reputationBuild, 8640000);

  cb();
  
};
