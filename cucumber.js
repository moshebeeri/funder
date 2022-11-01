let common = [
  'features/**/*.feature',
  '--require-module ts-node/register',
  '--require step-definitions/**/*.ts',
  '--format progress-bar'
].join(' ');

module.exports = {
  default: common,
  // More profiles can be added if desired
};
