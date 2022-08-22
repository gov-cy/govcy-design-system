/** test **/

// select dropdown
const govcyDropDown = (selector) => {
  let element = document.querySelector(selector)
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    showAllValues: true,
    selectElement: element,
    confirmOnBlur: false,
    onConfirm: (a) =>
      console.log(a)
  })
}
