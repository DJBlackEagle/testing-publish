/* eslint-disable no-undef */
const config = {
  hooks: {
    'before:release':
      'pnpm run clean:artifacts && pnpm run format:fix && pnpm run lint && git add . --update',
    'after:release':
      'echo Successfully released ${name} v${version} to ${repo.repository}.',
  },
  git: {
    changelog: 'git log --pretty=format:"* %s (%h)" ${from}...${to}',
    requireCleanWorkingDir: true,
    requireBranch: false,
    requireUpstream: true,
    requireCommits: true,
    addUntrackedFiles: true,
    commit: true,
    commitMessage: 'chore(release): ${version}',
    commitArgs: [],
    tag: true,
    tagExclude: null,
    tagName: '${version}',
    tagMatch: null,
    tagAnnotation: 'Release ${version}',
    tagArgs: [],
    push: true,
    pushArgs: ['--follow-tags'],
    pushRepo: '',
  },
  npm: {
    publish: false,
    publishPath: '.',
    publishArgs: [],
    tag: null,
    otp: null,
    ignoreVersion: false,
    allowSameVersion: false,
    versionArgs: [],
    skipChecks: false,
    timeout: 10,
  },
  github: {
    release: true,
    releaseName: '${version}',
    releaseNotes: null,
    autoGenerate: true,
    preRelease: false,
    draft: true,
    tokenRef: 'GITHUB_TOKEN',
    assets: null,
    host: null,
    timeout: 0,
    proxy: null,
    skipChecks: false,
    web: false,
  },
  gitlab: {
    release: false,
    releaseName: 'Release ${version}',
    releaseNotes: null,
    milestones: [],
    tokenRef: 'GITLAB_TOKEN',
    tokenHeader: 'Private-Token',
    certificateAuthorityFile: null,
    assets: null,
    origin: null,
    skipChecks: false,
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      header: '# Changelog',
      preset: {
        name: 'conventionalcommits',
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
  },
};

module.exports = config;
