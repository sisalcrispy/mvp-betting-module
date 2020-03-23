module.exports = function override(config, env) {
  console.log("*** react-rewired ***");
  config.output.filename= 'BoilerplateComponent.js'
  config.output.libraryTarget= 'commonjs2'
  return config;
}
