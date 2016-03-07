'use strict';

require('shelljs/global');
const array = require('lodash/array');

const remoteName = 'origin';
const execOptions = { silent: true };

class Utilities {

  remoteBranches(branchType) {
    const filter = `${remoteName}/${branchType}/`;
    const result = exec('git branch --color=never -r', execOptions);
    return this.filterBranches(this.getBranchesFromResult(result.output), filter);
  }

  localBranches(branchType) {
    const filter = `${branchType}/`;
    const result = exec('git branch --color=never', execOptions);
    return this.filterBranches(this.getBranchesFromResult(result.output), filter);
  }

  localOnlyBranches(branchType) {
    const remoteBranches = this.remoteBranches(branchType);
    const localBranches = this.localBranches(branchType);
    return array.difference(localBranches, remoteBranches);
  }

  remoteOnlyBranches(branchType) {
    const remoteBranches = this.remoteBranches(branchType);
    const localBranches = this.localBranches(branchType);
    return array.difference(remoteBranches, localBranches);
  }

  getBranchesFromResult(output) {
    const branches = [];
    const lines = output.split('\n');

    lines.forEach(line => {
      const branch = line.trim();
      if (branch.length > 0) {
        branches.push(branch);
      }
    });

    return branches;
  }

  filterBranches(branches, filter) {
    const filteredBranches = [];
    branches.forEach(branch => {
      const index = branch.indexOf(filter);
      if (index >= 0) {
      filteredBranches.push(branch.substr(index + filter.length));
      }
    });

    return filteredBranches;
  }
}

module.exports = new Utilities();
