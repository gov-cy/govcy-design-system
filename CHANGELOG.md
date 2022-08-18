# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v2.0.0] - 2022-08-18
### Added
- Installed and configured `Uglify` to minify/compress the js files to create(`app.min.js`) for the production.

- Installed and configured `eslint` for linting `es5, es6, es7, es8, es9, es10, es11 and es12`.

## [v1.4.0] - 2022-08-04
### Added
- new file `govcy-list.scss` file added to style the list item.
- component `dropdown autocomplete` added.
- component `local and manual address pattern` added.

### Updated
- `border-bottom` replaced with `box-shadow` in `govcy-link.scss`
- `list-style` removed from `govcy-alert.scss`  

## [v1.3.2] - 2022-07-26
### Added

- component `Select component with error` added.
- border color added for Select component error in `govcy-select` scss. 

### Updated

- index html updated after changes in `govcy-select`
## [v1.3.1] - 2022-07-26
### Added

- blue background color added in `govcy-bg` utility class.

## [v1.3.0] - 2022-07-14
### Added

- component `Confirm a phone number` added.
- added the accessibility feature on `Confirm a phone number with error` component.

## [v1.2.1] - 2022-07-14
### Updated

- update the `govcy-tabel` scss and html.

## [v1.2.0] - 2022-07-14

### Added

- component `govcy-select` added.
- component `govcy-details` added.
### Updated

- update the accessibility feature for the screen readers on `Error message summary` component.

## [v1.1.1] - 2022-07-04

### Changed

- replaced td with th in govcy-review table.
- changed the font-weight to 500 for `.govcy-fw-bold` utility class.
- changed the row header `<th>` font-weight to 700.

## [v1.1.0] - 2022-06-30

### Added

- new scss file added for links `.govcy-links` to style the link focus.
- added the skip to content functionality for the screen readers.

### Changed

- we moved all the link styles from `.govcy-typhography` to `.govcy-links`.

## [v1.0.3] - 2022-05-11

### Added

- media query added for `.govcy-table-responsive-vertical` to align table vertically. 

## [v1.0.2] - 2022-04-20

### Removed

- margin-bottom property has been removed from the `.govcy-fieldset`


## [v1.0.1] - 2022-03-23

### Added

- Create govcy-reboot.scss file to reset the outline for heading to zero
- Add margin-bottom: 0.5rem to govcy-header

### Changed

- Fixed the Pseudo element ::after on govcy-bg-primary-right::after
- Seprate govcy-table-responsive class from govcy-table and used as wrapper for

### Removed

- Removed tabindex attribute from html


## [v1.0.0] - 2022-03-18


### Added

- New helper govcy-visually-hidden.scss file has been added into the project directory which uses the visually-hidden bootstrap mixin, and the govcy-visually-hidden-error class 
- New HTML5 attribute has added for date, telephone and email.
- Stand alone Hint has added into the design system and it can be used any where with div or span.
- govcy-table-responsive class added to make table responsive for small devices.
- Implement the visually-hidden class for screen readers to read the errors.
- Nova- Semantic HTML code has added for each component in the index.html file for better understanding and usage.


### Changed

- unordered list, ordered list, paragraphs has margin-bottom: 1rem (govcy-mb-3).
- h1 to h6 has margin-bottom: 1.5rem (govcy-mb-4).
- Back Link and User Name / Signout are on the same level with margin-bottom: 1.5rem (govcy-mb-4).
- Alert Error, Alert Important, Alert Success and Banner has margin-bottom: 1.5rem (govcy-mb-4).
- All the input types has margin-bottom: 1.5rem (govcy-mb-4) though govcy-form-control class.
- fieldset has margin-bottom: 1.5rem (govcy-mb-4).
- Links has margin bottom of 0.5rem (8px or goofy-mb-2) and can be override through utility classes.


### Removed
- Text area height: 44px has been removed.


