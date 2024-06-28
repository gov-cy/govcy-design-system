const isElement = (value) =>
  value && typeof value === 'object' && value.nodeType === 1

const select = (selector, context) => {
  if (typeof selector !== 'string') {
    return []
  }

  if (!context || !isElement(context)) {
    context = window.document // eslint-disable-line no-param-reassign
  }

  const selection = context.querySelectorAll(selector)
  return Array.prototype.slice.call(selection)
}

export default select
