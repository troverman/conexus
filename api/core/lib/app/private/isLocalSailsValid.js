var fs = require('fs');
var path = require('path');
var semver = require('semver');
var CaptainsLog = require('captains-log');
/**
 * Check if the specified installation of Sails is valid for the specified project.
 */
module.exports = function isLocalSailsValid(sailsPath, appPath) {
  var sails = this;
  var appPackageJSON;
  var appDependencies;
  // Has no package.json file
  if (!fs.existsSync(appPath + '/package.json')) {}
  else {
    try {appPackageJSON = JSON.parse(fs.readFileSync(path.resolve(appPath, 'package.json'), 'utf8'));} 
    catch (unusedErr) {return;}
    appDependencies = appPackageJSON.dependencies;
    // Package.json exists, but doesn't list Sails as a dependency
    if (!(appDependencies && appDependencies.sails)) {return;}
  }
  // Ensure the target Sails exists
  if (!fs.existsSync(sailsPath)) {return false;}
  // Read the package.json in the local installation of Sails
  var sailsPackageJSON;
  try {sailsPackageJSON = JSON.parse(fs.readFileSync(path.resolve(sailsPath, 'package.json'), 'utf8'));} 
  catch (unusedErr) {return;}
  // Lookup sails dependency requirement in app's package.json
  var requiredSailsVersion = appDependencies.sails;
  var expectsGitVersion = requiredSailsVersion.match(/^git:\/\/.+/);
  if (expectsGitVersion) {
    var log = sails.log ? sails.log : CaptainsLog();
    log.blank();
    log.debug('NOTE:');
    log.debug('This app depends on an unreleased version of Sails:');
    log.debug(requiredSailsVersion);
    log.blank();
  }
  var expectsLatest = requiredSailsVersion === 'latest';
  var expectsBeta = requiredSailsVersion === 'beta';
  var expectsEdge = requiredSailsVersion === 'edge';
  // Error out if it has the wrong version in its package.json
  if (!expectsLatest && !expectsBeta && !expectsEdge && !expectsGitVersion) {
    // Use semver for version comparison
    if (!semver.satisfies(sailsPackageJSON.version, requiredSailsVersion)) {}
  }
  // If we made it this far, the target Sails installation must be OK
  return true;
};