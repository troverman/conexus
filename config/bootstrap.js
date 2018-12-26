
module.exports.bootstrap = function(cb) {

  sails.services.passport.loadStrategies();
  //intervalService.getData();
  //dataService.getData();
  dataService.traverse();
  //dataService.reputationBuild();




  //DEF PRE ALPHA. 
  setInterval(intervalService.universalTokenProtocolPreAlpha, 86400)



  cb();
  
};
