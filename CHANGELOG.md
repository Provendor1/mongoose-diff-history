# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.1](https://github.com/bc443e/mongoose-diff-history/compare/v2.3.0...v2.3.1) (2020-11-30)

### Bug Fixes

-   depopulate object before determining diff ([297c85c](https://github.com/bc443e/mongoose-diff-history/commit/297c85c4cbd079d2da6730229b339c989e5b55fa))

## [2.3.0](https://github.com/bc443e/mongoose-diff-history/compare/v2.2.3...v2.3.0) (2020-11-16)

### Features

-   remove pre-hook for model.remove() so soft deletes work ([7599047](https://github.com/bc443e/mongoose-diff-history/commit/759904761ab50cf4a96f4c9b3c38679e964629ff))

### [2.2.3](https://github.com/bc443e/mongoose-diff-history/compare/v2.2.2...v2.2.3) (2020-10-26)

### Bug Fixes

-   add repo to package.json ([3d94c94](https://github.com/bc443e/mongoose-diff-history/commit/3d94c94e03e063b5864da70517f62cfb3ac73138))

### [2.2.2](https://github.com/bc443e/mongoose-diff-history/compare/v2.2.1...v2.2.2) (2020-10-26)

### [2.2.1](https://github.com/bc443e/mongoose-diff-history/compare/v2.2.0...v2.2.1) (2020-10-26)

## [2.2.0](https://github.com/bc443e/mongoose-diff-history/compare/v2.1.0...v2.2.0) (2020-10-26)

### Features

-   first commit after forking ([e7433f9](https://github.com/bc443e/mongoose-diff-history/commit/e7433f98f29090d759e4810044c6d3226fa2a312))

### Bug Fixes

-   indexing for CosmosDB, lodash.pick bug ([c6c817b](https://github.com/bc443e/mongoose-diff-history/commit/c6c817bda777f95e807e6ce4943fe4352b58a8e5))
-   put package version back to what it's supposed to be ([9eeb483](https://github.com/bc443e/mongoose-diff-history/commit/9eeb483d0b8328309cf48b1f149d1991de07f66e))
-   scoping and versioning on package files ([442fd4c](https://github.com/bc443e/mongoose-diff-history/commit/442fd4ca52e14af49226ec1dc848475eaa6aebc9))

## [1.1.0](https://github.com/bc443e/mongoose-diff-history/compare/v2.1.0...v1.1.0) (2020-10-26)

### Features

-   first commit after forking ([e7433f9](https://github.com/bc443e/mongoose-diff-history/commit/e7433f98f29090d759e4810044c6d3226fa2a312))

### Bug Fixes

-   indexing for CosmosDB, lodash.pick bug ([c6c817b](https://github.com/bc443e/mongoose-diff-history/commit/c6c817bda777f95e807e6ce4943fe4352b58a8e5))
-   scoping and versioning on package files ([442fd4c](https://github.com/bc443e/mongoose-diff-history/commit/442fd4ca52e14af49226ec1dc848475eaa6aebc9))

### [2.1.1](https://github.com/georgejdli/mongoose-diff-history/compare/v2.1.0...v2.1.1) (2020-10-14)

## [2.1.0](https://github.com/mimani/mongoose-diff-history/compare/v2.0.0...v2.1.0) (2020-05-04)

### Features

-   support `strict` mode as set in model config or query opts ([9fe281d](https://github.com/mimani/mongoose-diff-history/commit/9fe281da56ce298a9293cebe8f7c59f8908627ec))

## [2.0.0](https://github.com/mimani/mongoose-diff-history/compare/v1.6.1...v2.0.0) (2020-04-24)

### ⚠ BREAKING CHANGES

-   lean no longer forced false for saveDiffs, may cause
    issues for some

### Bug Fixes

-   cannot use \$timestamps, lean not respected ([6a24f4d](https://github.com/mimani/mongoose-diff-history/commit/6a24f4d73c1700c1971552d25a1ad0096b8eb7b7))
-   fix lean option override in findOneAndUpdate pre hook
-   fix findOneAndUpdate pre hook
-   findOneAndUpdate pre hook is not working as expected when timestamps autogeneration is enabled
