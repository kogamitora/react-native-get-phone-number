module.exports = {
  root: true,
  extends: ["universe/native", "universe/web"],
  ignorePatterns: ["build"],
  rules: {
    "prettier/prettier": ["error", { semi: false }],
  },
}
