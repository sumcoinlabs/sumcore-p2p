'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on sumcore-p2p Module {0}'
};

module.exports = require('sumcore-lib').errors.extend(spec);
