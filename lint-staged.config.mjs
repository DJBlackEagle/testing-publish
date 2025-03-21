const config = {
  '!(*.{js,jsx,mjs,ts,tsx})': 'prettier --check --ignore-unknown',
  '*.{js,jsx,mjs,ts,tsx}': ['prettier --check --ignore-unknown'],
};

export default config;
