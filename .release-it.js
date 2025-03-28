/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
const commitlint = require('./.commitlintrc');

const config = {
  hooks: {
    'before:release':
      'yarn run prettier:fix && yarn run lint && git add . --update',
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
            section: commitlint.prompt.questions.type.enum.docs.title,
          },
          {
            type: 'fix',
            hidden: false,
            section: commitlint.prompt.questions.type.enum.fix.title,
          },
          {
            type: 'perf',
            hidden: false,
            section: commitlint.prompt.questions.type.enum.perf.title,
          },
          {
            type: 'feat',
            hidden: false,
            section: commitlint.prompt.questions.type.enum.feat.title,
          },
          {
            type: 'refactor',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.refactor.title,
          },
          {
            type: 'revert',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.revert.title,
          },
          {
            type: 'test',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.test.title,
          },
          {
            type: 'style',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.style.title,
          },
          {
            type: 'build',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.build.title,
          },
          {
            type: 'ci',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.ci.title,
          },
          {
            type: 'chore',
            hidden: true,
            section: commitlint.prompt.questions.type.enum.chore.title,
          },
        ],
      },
    },
  },
};

export default config;
