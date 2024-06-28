# Versioning Policy

The purpose of the versioning policy is counter the effects of the “dependency hell”. As we release new components, update old components or correct bugs, care must be taken to make sure the changes do not affect developers that already use our assets and that they are not locked in specific versions with no way to upgrade.

By applying simple rules, requirements to dictate how version numbers are assigned or incremented and processes on specific actions we can tackle the dependency hell phenomenon. These rules are based on but not necessarily limited to pre-existing widespread common practices in use in both closed and open-source software and are based on the [Semantic Versioning system](https://semver.org/).

## Versioning Specification​

The UDS developer assets use the format of **X.Y.Z** (Major.Minor.Patch) as follows:

Given a version number MAJOR.MINOR.PATCH, increment is made:
- on the **MAJOR** version when changes made, are incompatible with the previous version and require developers that use the UDS developer assets, to change their code,
- on the **MINOR** version when functionality is added in a backwards compatible manner, and
- on the **PATCH** version when backwards compatible bug fixes are made.

Read more on the versioning specification at https://semver.org/#semantic-versioning-specification-semver.

### Versioning Examples​
- v0.0.1
- v0.0.2
- v0.1.1
- v0.2.1
- v1.0.0
- v1.0.1
- v2.0.0
- v2.1.0
- v2.2.0
- v2.2.1
- v2.2.2
- v2.2.3
- latest

## How are version numbers implemented in Github

Versions are implemented using Github's tags.

## How developers can use developer assets of a specific version

Developers can use Github's tags to use developer assets from the `/dist` folder of a specific version. You can navigate directly to a specific version using the Github tags in the Githubs url. For example https://github.com/gov-cy/govcy-unified-design-system/tree/v3.0.0/dist/

You can also use jsdeliver CDN to navigate directly to a specific version using the Github tags in the jsdeliver url. For example https://cdn.jsdelivr.net/gh/gov-cy/govcy-unified-design-system@v3.0.0/dist/css/govcy.uds.min.css

Developers can use the latest version of the developer assets with the same **MAJOR** version number, without the risk of breaking their code. For example if you are using v3.0.0, you can use v3.0.1 or v3.1.0 without the risk of breaking your code and benefit from the new version enhancements.

On the other hand, if you are upgrading to a new **MAJOR** version, for example from v2.1.1 to v3.0.0, you should expect that you will need to change your HTML code with the new specifications. 
