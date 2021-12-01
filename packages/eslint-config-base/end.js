const isProduction = process.env.NODE_ENV === 'production'
const errorOnProductionOnly = isProduction ? 'error' : 'warn'

module.exports = {
  extends: [
    'prettier-standard/end'
  ],

  rules: {
    'no-console': errorOnProductionOnly,
    'no-debugger': errorOnProductionOnly,
    'no-unused-vars': errorOnProductionOnly,
    'no-void': 'off',
  }
}
