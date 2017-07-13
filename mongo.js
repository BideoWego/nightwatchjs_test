const mongoose = require('mongoose');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/mongo')[env];


module.exports = () => {
  const mongodbUrl = env === 'production' ?
    process.env[config.use_env_variable] :
    `mongodb://${ config.host }/${ config.database }`;
  return  mongoose.connect(mongodbUrl);
};








