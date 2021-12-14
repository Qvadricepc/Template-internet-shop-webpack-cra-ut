module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    'eslint --fix',
    'react-scripts test --bail --findRelatedTests --watchAll=false',
  ],
};
