#!/usr/bin/env node

require('shelljs/global');
const utilities = require('./utilities');

const branches = utilities.remoteOnlyBranches('feature')
branches.forEach(branch => echo(branch));
