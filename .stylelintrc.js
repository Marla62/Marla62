module.exports = {
    extends: ['stylelint-config-standard'],
    plugins: ["stylelint-order"],
    rules:{
      'no-descending-specificity':null,
      'function-url-quotes': 'always',
      'string-quotes': 'double', 
      'indentation': 2,
      'color-hex-case': 'upper',
      'color-hex-length': 'long',
      'rule-empty-line-before': 'never',
      'font-family-no-missing-generic-family-keyword': null,
      'block-opening-brace-space-before':'always',
      'property-no-unknown':null,
      'no-empty-source':null,
    } 
  }
  