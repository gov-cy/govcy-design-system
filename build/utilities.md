GOV.CY Utility classes 
---------------------

The following utility classes have been created and can be used to build the GOV.CY design system. 

## Border

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-border-width**| `govcy-br-*`<br><br> `govcy-br-top-*`<br><br> `govcy-br-bottom-*`<br><br> `govcy-br-left-*`<br><br> `govcy-br-right-*`|Add or remove borders from an element. <br><br> * can have values `0` - `8`. |`<div class="govcy-br-0">Border-0</div>` <br><br> `<div class="govcy-br-1">Border-1</div>`<br><br> `<div class="govcy-br-left-4">Border Left 4</div>`|
|**govcy-border-color**| `govcy-br-*`<br><br> `govcy-br-top-*`<br><br> `govcy-br-bottom-*`<br><br> `govcy-br-left-*`<br><br> `govcy-br-right-*`|Change the colors of the borders of an element. <br><br> * can have values `primary`, `secondary`, `success`, `standard`, `danger`, `info`, `input`. |`<div class="govcy-br-primary"></div>` <br><br> `<div class="govcy-br-left-dange"></div>`|
|**govcy-rounded**| `govcy-rounded-*`<br><br> `govcy-rounded-top-*`<br><br> `govcy-rounded-bottom-*`<br><br> `govcy-rounded-left-*`<br><br> `govcy-rounded-right-*`|Change the borders radius of an element. <br><br> * can have values `0`, `1`, `2`, `3`, `circle`, `pill`. |`<div class="govcy-rounded-2"></div>` <br><br> `<div class="govcy-rounded-top-pill"></div>`|

## Margin, padding

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-margin**| `govcy-m-*`<br><br> `govcy-mx-*`<br><br> `govcy-my-*`<br><br> `govcy-mt-*`<br><br> `govcy-mb-*` <br><br> `govcy-mr-*`<br><br> `govcy-ml-*`|Change the margin radius of an element. `govcy-m` changes margin in all directions, `govcy-mx` changes margin left and right, `govcy-my` changes margin top and bottom, `govcy-mt` changes margin top, `govcy-mb` changes margin bottom, `govcy-ml` changes margin left, `govcy-mr` changes margin right <br><br> * can have values `0` - `5`, `auto`. |`<div class="govcy-m-2"></div>` <br><br> `<div class="govcy-mx-1"></div>` <br><br> `<div class="govcy-mt-auto"></div>`|
|**govcy-padding**| `govcy-p-*`<br><br> `govcy-px-*`<br><br> `govcy-py-*`<br><br> `govcy-pt-*`<br><br> `govcy-pb-*` <br><br> `govcy-pr-*`<br><br> `govcy-pl-*`|Change the padding radius of an element. `govcy-p` changes padding in all directions, `govcy-px` changes padding left and right, `govcy-py` changes padding top and bottom, `govcy-pt` changes padding top, `govcy-pb` changes padding bottom, `govcy-pl` changes padding left, `govcy-pr` changes padding right <br><br> * can have values `0` - `5`. |`<div class="govcy-p-2"></div>` <br><br> `<div class="govcy-px-1"></div>` <br><br> `<div class="govcy-pt-5"></div>`|

## Width, height

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-width**| `govcy-w-*`|Change the width of an element using percentage.<br><br> * can have values `10`, `15`, `25`, `35`, `50`, `60`, `75`, `100`, `auto`. |`<div class="govcy-w-50"></div>` <br><br> `<div class="govcy-w-100"></div>`|
|**govcy-height**| `govcy-h-*`|Change the height of an element using percentage.<br><br> * can have values `10`, `15`, `25`, `35`, `50`, `60`, `75`, `100`, `auto`. |`<div class="govcy-h-50"></div>` <br><br> `<div class="govcy-h-100"></div>`|

## Background

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-background-color**| `govcy-bg-*`|Change the background colour of an element.<br><br> * can have values `primary`, `secondary`, `success`, `info`, `danger`, `light`, `dark`, `white`, `gray`. |`<div class="govcy-bg-primary"></div>` <br><br> `<div class="govcy-bg-dark"></div>`|
|**govcy-opacity**| `govcy-opacity-*`|Change the opacity level of an element. The opacity-level describes the transparency-level, where 100 is not transparent at all, 50 is 50% see-through, and 0 is completely transparent.<br><br> * can have values `10`, `25`, `50`, `75`, `100`. |`<div class="govcy-opacity-75"></div>` <br><br> `<div class="govcy-opacity-50"></div>`|

## Text

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-text-color**| `govcy-text-*`|Change the text colour in an element.<br><br> * can have values `primary`, `secondary`, `success`, `info`, `danger`, `dark`, `white`. |`<div class="govcy-text-primary"></div>` <br><br> `<div class="govcy-text-white"></div>`|
|**govcy-text-align**| `govcy-text-*`|Change the text alignment in an element.<br><br> * can have values `start`, `end`, `center`. |`<div class="govcy-text-start"></div>` <br><br> `<div class="govcy-text-center"></div>`|
|**govcy-text-decoration**| `govcy-text-deco-*`|Change the text decoration in an element.<br><br> * can have values `none`, `underline`, `line-through`. |`<div class="govcy-text-deco-none"></div>` <br><br> `<div class="govcy-text-deco-underline"></div>`|
|**govcy-text-transform**| `govcy-text-*`|Change how to capitalize text in an element.<br><br> * can have values `lowercase`, `uppercase`, `capitalize`. |`<div class="govcy-text-uppercase"></div>` <br><br> `<div class="govcy-text-capitalize"></div>`|
|**govcy-font-size**| `govcy-fs-*`|Change the font size of text in an element.<br><br> * can have values `1` - `6`. Each value changes to the same font size as the sane header element. i.e. `govcy-fs-2` will have the same font size as an `<h2>` . |`<div class="govcy-fs-2"></div>` <br><br> `<div class="govcy-fs-5"></div>`|
|**govcy-extra-font-size**| `govcy-efs-*`|Change the font size of text in an element.<br><br> * can have values `large`,`larger`,`initial`,`medium`, `small`, `smaller`, `x-large`,`x-small`,`xx-large`,`xx-small`,`xxx-large`,`webkit-large`. More details on font sizes at https://developer.mozilla.org/en-US/docs/Web/CSS/font-size |`<div class="govcy-efs-small"></div>` <br><br> `<div class="govcy-efs-larger"></div>`|
|**govcy-font-style**| `govcy-fst-*`|Change the font style of text in an element.<br><br> * can have values `italic`,`normal` |`<div class="govcy-fst-normal"></div>` <br><br> `<div class="govcy-fst-italic"></div>`|
|**govcy-font-weight**| `govcy-fw-*`|Change the font weight of text in an element.<br><br> * can have values `light`,`lighter`, `normal`, `bold`, `bolder` |`<div class="govcy-fw-normal"></div>` <br><br> `<div class="govcy-fw-bold"></div>`|
|**govcy-line-height**| `govcy-lh-*`|Change the line height of text in an element.<br><br> * can have values `1`,`sm`, `base`, `lg` |`<div class="govcy-lh-base"></div>` <br><br> `<div class="govcy-lh-lg"></div>`|

## General

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-valign**| `govcy-valign-*`|Change the vertical alignment of an inline, inline-block or table-cell box in an element.<br><br> * can have values `baseline`,`top`, `middle`, `bottom`, `text-bottom`, `text-top` |`<div class="govcy-valign-top"></div>` <br><br> `<div class="govcy-valign-middle"></div>`|
|**govcy-float**| `govcy-float-*`|Change an element floats.<br><br> * can have values `left`,`right`, `none` |`<div class="govcy-float-left"></div>`|
|**govcy-overflow**| `govcy-overflow-*`|Change what should happen if content overflows an element's box.<br><br> * can have values `auto`,`hidden`, `visible`, `scroll` |`<div class="govcy-overflow-auto"></div>`|
|**govcy-display**| `govcy-d-*`|Change the display behavior of an element.<br><br> * can have values `inline`, `inline-block`, `block`, `grid`, `table`, `table-row`, `table-cell`, `flex`, `inline-flex`, `none` |`<div class="govcy-d-none"></div>`|

## Flex

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-flex**| `govcy-flex-*`|Change a flex item will grow or shrink to fit the space available in its flex container.<br><br> * can have values `fill`, `row`, `column`, `row-reverse`, `grow-0`, `grow-1`, `shrink-0`, `shrink-1` |`<div class="govcy-flex-fill"></div>`|
|**govcy-gap**| `govcy-gap-*`|Change the gaps (gutters) between rows and columns.<br><br> * can have values `0` - `5` |`<div class="govcy-gap-2"></div>`|
|**govcy-flex-wrap**| `govcy-flex-*`|Change whether flex items are forced onto one line or can wrap onto multiple lines.<br><br> * can have values `wrap`, `nowrap`, `wrap-reverse`|`<div class="govcy-flex-wrap"></div>`|

## Flex Align, order

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-justify-content**| `govcy-justify-content-*`| Change how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.<br><br> * can have values `start`, `end`, `center`, `between`, `around`,`evenly`|`<div class="govcy-justify-content-center"></div>`|
|**govcy-align-items**| `govcy-align-items-*`| Change the align-items property of an element.<br><br> * can have values `start`, `end`, `center`, `baseline`, `stretch`|`<div class="govcy-align-items-stretch"></div>`|
|**govcy-align-content**| `govcy-align-content-*`| Change the align-content property of an element.<br><br> * can have values `start`, `end`, `center`, `between`, `around`, `stretch`|`<div class="govcy-align-content-stretch"></div>`|
|**govcy-align-self**| `govcy-align-self-*`| Change the align-self property of an element.<br><br> * can have values `auto`, `start`, `end`, `center`, `baseline`, `stretch`|`<div class="govcy-align-self-stretch"></div>`|
|**govcy-order**| `govcy-order-*`| Change the order property of an element.<br><br> * can have values `first`, `1` -`5`, `last`|`<div class="govcy-order-first"></div>`|

## Position

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-position**| `govcy-position-*`| Change the position property of an element.<br><br> * can have values `static` ,`relative` ,`absolute` ,`fixed` ,`sticky`|`<div class="govcy-position-static"></div>`|
|**govcy-top**| `govcy-top-*`| Change the top property of an element.<br><br> * can have values `0` ,`50` ,`100` |`<div class="govcy-top-0"></div>`|
|**govcy-bottom**| `govcy-bottom-*`| Change the bottom property of an element.<br><br> * can have values `0` ,`50` ,`100` |`<div class="govcy-bottom-0"></div>`|
|**govcy-left**| `govcy-left-*`| Change the left property of an element.<br><br> * can have values `0` ,`50` ,`100` |`<div class="govcy-left-0"></div>`|
|**govcy-right**| `govcy-right-*`| Change the right property of an element.<br><br> * can have values `0` ,`50` ,`100` |`<div class="govcy-right-0"></div>`|

## Other

| Utility      | Usage      | Description | Example|
| -------------| ---------- | ----------- |---------|
|**govcy-user-select**| `govcy-user-select-*`| Change whether the text of an element can be selected.<br><br> * can have values `all` ,`auto` ,`none`|`<div class="govcy-user-select-none"></div>`|
|**govcy-pointer-events**| `govcy-pe-*`| Change whether or not an element should react to pointer events.<br><br> * can have values `auto` ,`none`|`<div class="govcy-pe-none"></div>`|

## Examples code

```html
<div class="govcy-br-0">Border-0</div>
<div class="govcy-br-1">Border-1</div>
<div class="govcy-br-2">Border-2</div>
<div class="govcy-br-3">Border-3</div>
<div class="govcy-br-4">Border-4</div>
<div class="govcy-br-5">Border-5</div>

<div class="govcy-br-2 govcy-br-primary">Primary</div>
<div class="govcy-br-2 govcy-br-secondary">Secondary</div>
<div class="govcy-br-2 govcy-br-success">Success</div>
<div class="govcy-br-2 govcy-br-standard">Standard</div>
<div class="govcy-br-2 govcy-br-danger">Danger</div>
<div class="govcy-br-2 govcy-br-info">Info</div>
<div class="govcy-br-2 govcy-br-input">input</div>
<div class="govcy-br-1 govcy-br-sm-3 govcy-br-md-5 govcy-br-danger govcy-br-sm-secondary govcy-br-md-primary">Responsive</div>
<div class="govcy-br-5 govcy-br-right-sm-0 govcy-br-bottom-md-0 govcy-br-left-lg-0">Remove</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded 1">Rounded 1</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded 2">Rounded 2</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded 3">Rounded 3</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-pill">Pill</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-circle">Circle</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-top-3">Top</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-right-3">Right</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-bottom-3">Bottom</div>
<div class="govcy-br-5 govcy-br-primary govcy-rounded-left">Left</div>
```