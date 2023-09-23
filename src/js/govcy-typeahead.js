 // select dropdown
 const govcyTypeAheadDropDown = (selector) => {
  let element = document.querySelector(selector)
  accessibleAutocomplete.enhanceSelectElement({
    defaultValue: '',
    showAllValues: true,
    selectElement: element,
    confirmOnBlur: false,
    onConfirm: (query) => {
      const requestedOption = [].filter.call(element.options, option => (option.textContent || option.innerText) === query)[0]
      if (requestedOption) { 
        requestedOption.ariaSelected = true
      }
    }
  })
 }