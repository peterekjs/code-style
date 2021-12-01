# @peterek/eslint-config-base

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs)
base for language specific configurations using **Prettier** and **JavaScript Standard Style** as ESLint
rules.

> This is a base configuration for more language specific configs such as `@peterek/eslint-config-js` or `@peterek/eslint-config-ts`. DO NOT USE DIRECTLY within packages not related to ESLint configuration.

## Usage

### ESLint config

This package has two main files (`base` & `end`). To ensure all the extending configurations align with prettier & standard configs, you have to put all other extends between these modules.

```json
{
  "extends": [
    "@peterek/base/start",

    // all the configurations should be put here,

    "@peterek/base/end"
  ]
}
```
