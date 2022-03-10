# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [0.1.2-rc.0](https://github.com/logto-io/js/compare/v0.1.1-rc.0...v0.1.2-rc.0) (2022-03-10)


### Bug Fixes

* remove `prepublish` script ([#221](https://github.com/logto-io/js/issues/221)) ([cc89533](https://github.com/logto-io/js/commit/cc895337762cf7740578a8eb14835ed0d5d72905))



### [0.1.1-rc.0](https://github.com/logto-io/js/compare/v0.1.0...v0.1.1-rc.0) (2022-03-10)


### Bug Fixes

* add `publishConfig` to packages ([a809e25](https://github.com/logto-io/js/commit/a809e257982f7d3c31f104fa5daf983c535adfc5))



## 0.1.0 (2022-03-10)


### ⚠ BREAKING CHANGES

* **js:** initialize js/js package (#122)

### Features

* **browser-sample:** init package ([10076e1](https://github.com/logto-io/js/commit/10076e15e6c491c2584cb8a0269f0d7bfddef526))
* **browser:** signIn ([#170](https://github.com/logto-io/js/issues/170)) ([2418193](https://github.com/logto-io/js/commit/24181931643472318345678ec68b7e874a72fd5a))
* **js:** add CodeTokenResponse ([#186](https://github.com/logto-io/js/issues/186)) ([ece931c](https://github.com/logto-io/js/commit/ece931c3556a3fb654127ef258e25c141e27fa7a))
* **js:** core function generateSignOutUri ([0a26ebe](https://github.com/logto-io/js/commit/0a26ebea93d08e559fb81ef930aa0e604b90b24f))
* **js:** decodeIdToken ([#128](https://github.com/logto-io/js/issues/128)) ([973708b](https://github.com/logto-io/js/commit/973708b7f3f518b85591384a6d1392b74ef71ab1))
* **js:** export in index.ts ([#159](https://github.com/logto-io/js/issues/159)) ([423c185](https://github.com/logto-io/js/commit/423c1851e6339a5069559abc564e229aa111529a))
* **js:** fetch access token by authorization code ([1160683](https://github.com/logto-io/js/commit/1160683f2eabde8f988c01cddd829fc480b54b20))
* **js:** fetchOidcConfig ([#138](https://github.com/logto-io/js/issues/138)) ([8555d16](https://github.com/logto-io/js/commit/8555d169e82d7b814b017583ad2f924b3a6ac45d))
* **js:** fetchUserInfo ([#152](https://github.com/logto-io/js/issues/152)) ([e0dca51](https://github.com/logto-io/js/commit/e0dca5153354966470c00d8c23a8066e26fb27e2))
* **js:** generate state, code verifier and code challenge ([#125](https://github.com/logto-io/js/issues/125)) ([9784f3a](https://github.com/logto-io/js/commit/9784f3a97f4d84d9945cd46b8a6a9b93b33b8964))
* **js:** implement fetchTokenByRefreshToken ([4e6600e](https://github.com/logto-io/js/commit/4e6600e6035fb2b849d224c171ca1bc29b34cb3e))
* **js:** refactor fetchTokenByRefreshToken ([#147](https://github.com/logto-io/js/issues/147)) ([f8dbcce](https://github.com/logto-io/js/commit/f8dbcce16ce9af14936807d7eb59e0d7bbde8edd))
* **js:** requester ([#137](https://github.com/logto-io/js/issues/137)) ([c86745b](https://github.com/logto-io/js/commit/c86745bab035543b3d14dc5fe1433e413d3d51f2))
* **js:** revoke ([#153](https://github.com/logto-io/js/issues/153)) ([2e554ca](https://github.com/logto-io/js/commit/2e554ca79b9ec1b140da2a81704d0e65d5a751eb))
* **js:** scopes and generateSignInUri ([#150](https://github.com/logto-io/js/issues/150)) ([c47e3ea](https://github.com/logto-io/js/commit/c47e3ea4a94c35e63e0d77bcc27438c380c657ca))
* **js:** verifyAndParseCodeFromCallbackUri ([#132](https://github.com/logto-io/js/issues/132)) ([7180b03](https://github.com/logto-io/js/commit/7180b031c53161dd3ff77115e1e0e5d3fa73b224))
* **js:** verifyIdToken ([#127](https://github.com/logto-io/js/issues/127)) ([954dc6d](https://github.com/logto-io/js/commit/954dc6d9f046e752f635248bcd87e15cf02fb63e))


### Bug Fixes

* `package.json` ([8afd534](https://github.com/logto-io/js/commit/8afd534e5d79db29c9ef1aa55cfa94549ea025b8))
* **js:** grant type should be 'authorization_code'  instead of 'code' ([5d416d0](https://github.com/logto-io/js/commit/5d416d0bb0901dc7fd7b79afdb504a1cdf11b901))
* **js:** response_type should be hard-coded as 'code' ([5048ae1](https://github.com/logto-io/js/commit/5048ae152f15a9fd5c2626c5e6c54d8fd327aadb))
* **js:** update node-fetch version ([8f012dd](https://github.com/logto-io/js/commit/8f012dd962e234d59a5d2e4f7397e863ee97f02d))
* **ut:** update jest coverage configs ([b10d84e](https://github.com/logto-io/js/commit/b10d84edbf6c1639bfaa4dbb9fa41f4a10543bde))


### Code Refactoring

* **js:** initialize js/js package ([#122](https://github.com/logto-io/js/issues/122)) ([07322cb](https://github.com/logto-io/js/commit/07322cb02dd461cc69dc1f7bf815c649e91046da))