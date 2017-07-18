'use strict';

// Dependencies requirement
const moment = require('moment');

// Local modules requirement
const common1 = require('./selected_common_services/common1');

const env = process.env;

module.exports.handle = (event, context, callback) => {
  console.log(`Got event: ${JSON.stringify(event)}`);
  const response = {
    moment: moment(),
    common1: common1.fnc(),
    commonVar1: env.commonVar1,
    commonVar2: env.commonVar2,
    functionVar1: env.functionVar1,
    functionVar2: env.functionVar2,
  };
  callback(null, response);
};
