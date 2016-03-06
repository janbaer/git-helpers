#!/usr/bin/env node

require('shelljs/global');
const utilities = require('./utilities');

const branches = utilities.localOnlyBranches('release')
branches.forEach(branch => echo(branch));
