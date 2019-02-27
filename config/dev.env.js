'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API:'"http://106.38.29.144:23320"',
  //API:'"http://192.168.0.192:8777"',
  //  API:'"http://localhost:9003"',
})
