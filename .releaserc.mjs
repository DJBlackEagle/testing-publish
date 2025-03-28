/* eslint-disable import/no-anonymous-default-export */
/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  dryRun: true,
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            {
              type: 'docs',
              hidden: false,
              section: 'Documentation',
            },
            {
              type: 'fix',
              hidden: false,
              section: 'Bug Fixes',
            },
            {
              type: 'perf',
              hidden: false,
              section: 'Performance Improvements',
            },
            {
              type: 'feat',
              hidden: false,
              section: 'Features',
            },
            {
              type: 'refactor',
              hidden: true,
              section: 'Code Refactoring',
            },
            {
              type: 'revert',
              hidden: true,
              section: 'Reverts',
            },
            {
              type: 'test',
              hidden: true,
              section: 'Tests',
            },
            {
              type: 'style',
              hidden: true,
              section: 'Styles',
            },
            {
              type: 'build',
              hidden: true,
              section: 'Builds',
            },
            {
              type: 'ci',
              hidden: true,
              section: 'Continuous Integrations',
            },
            {
              type: 'chore',
              hidden: true,
              section: 'Chores',
            },
          ],
        },
      },
    ],
  ],
};
