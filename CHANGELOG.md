# Changelog
 
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
 
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