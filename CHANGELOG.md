# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
## [v3.0.1] - 2024-12-11
### Updated
- `govcy_details` sass `.govcy-details__text` margin buttom `0` at last child
- `govcy_summary-list` sass `.govcy-summary-list-key` padding-rigth `0.5 rem`
## [v3.0.0] – 2024-06-28
**Major version change**

Total redesign of the design system, with branding and styling changes. Also we have added changed existing components and created new elements to accommodate both services and websites.

### Added
We have added new elements to the design system:
- 11 new components
	- accordion 
	- character count
	- cookie banner
	- data tables
	- date picker
	- inset text
	- phase banner
	- summary list
	- tag
	- textarea
	- warning text
- 1 style
	- Images
- 14 patterns
	- accessibility statement page
	- addresses
	- bank details
	- confirm an email address
	- confirmation pages
	- contact page
	- cookies page
	- filter results
	- gender or sex
	- numeric inputs
	- privacy policy
	- social insurance number
	- step by step navigation
	- task list page

### Changed

All styles, components and patters have changed. 

## [v2.2.0] - 2022-07-10
No changes made on CSS or JS. Added documentation patterns for 'Add multiple things' and 'Structuring a service'

## [v2.1.1] - 2022-09-22
### Added
- list-item padding left added from 0px to 1.5 rem in `govcy-list.scss`
- new input type text char length 6, 7, 8 and 9 added in `govcy-inputs.scss`

### Updated
- `$govcy-brand-colors` variable `info` color value changed to `#487d93`

## [v2.1.0] - 2022-08-19
### Added
- `.eslintignore` file added to ignore the `app.min.js` from linting.
- `.eslintrc.json` file added for the linting rules.
- `govcy-mobile-OTP.js` file added in `src/js`.
- `main.js` file added in `src/js`.
### Updated
- Component `Confirm a phone number` html code updated.
- Accessibility features on `Confirm a phone number with error` component updated.
- `uglify.js` file updated (`govcy-mobile-OTP.js` file entry).
### Changed
- `app.js` removed from `src/js`.

## [v2.0.0] - 2022-08-18
### Added
- Installed and configured `Uglify` to minify/compress the js files to create(`app.min.js`) for the production.
- Installed and configured `eslint` for linting the js files in `govcy-design-system`.

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

[3.0.0] https://github.com/gov-cy/govcy-design-system/tree/v3.0.0