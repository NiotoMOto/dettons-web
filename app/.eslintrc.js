module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  env: {
    browser: true
  },
  rules: {
    'react/prefer-es6-class': 0,
    'strict': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [
          'invalidHref'
        ]
      }
    ]
  }
}
