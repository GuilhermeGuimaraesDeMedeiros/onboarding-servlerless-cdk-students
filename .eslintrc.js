module.exports = {
  parserOptions: {
    // needed by some typescript rules
    project: ['./tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  extends: '@stutzlab/eslint-config',
  env: {
    jest: true
  },
  plugins: ['import'],
  rules: {
    'import/no-commonjs': 'off'
  }
  
};