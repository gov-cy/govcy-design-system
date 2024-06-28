class Component {
  constructor() {}

  static init(selector) {
    document.addEventListener('DOMContentLoaded', () => {
      const elements = document.querySelectorAll(selector)

      if (!elements) {
        return
      }

      elements.forEach((element) => {
        new this(element)
      })
    })
  }
}

export default Component
