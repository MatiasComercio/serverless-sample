'use strict';

// Dependencies requirement
const moment = require('moment');
const _ = require('lodash');

// Local modules requirement
const common1 = require('./selected-common-services/common1');

const env = process.env;

module.exports.handle = (event, context, callback) => {
  console.log(`Got event: ${JSON.stringify(event)}`);
  const response = {
    moment: moment(),
    common1: common1.fnc(),
    commonVar1: env.commonVar1,
    commonVar2: env.commonVar2,
    commonNestedVar1: _.get(env, 'commonNestedVarGroup.commonNestedVar1'),
    commonNestedVar2: _.get(env, 'commonNestedVarGroup.commonNestedVar2'),
    functionVar1: env.functionVar1,
    functionVar2: env.functionVar2,
    functionNestedVar1: _.get(env, 'functionNestedVarGroup.functionNestedVar1'),
    functionNestedVar2: _.get(env, 'functionNestedVarGroup.functionNestedVar2')
  };
  callback(null, response);
};
