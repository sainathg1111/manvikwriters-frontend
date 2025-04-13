const { getDefaultConfig } = require("expo/metro-config");
const config = getDefaultConfig(__dirname);
config.watchFolders = [];
config.maxWorkers = 1;
module.exports = config;
