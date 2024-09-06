"use strict";

Object.assign(exports, require('./environment_browser'));

Object.assign(exports, {
  TransportUDP: require('./TransportUDP'),
  TransportTCP: require('./TransportTCP'),
  WebSocket: require('ws'),
  Socket: require('net').Socket,
  dgram: require('dgram'),
  Promise: exports.Promise || require('promiscuous'),
  console: require('console'),
  timers: require('timers')
});
