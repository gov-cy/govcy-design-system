import Component from './component.js'

/*
Constants 
*/

const EVENT_HANDLER = 'click'
const CLASS_SHOW = 'show'
const CLASS_COLLAPSE = 'collapse'
const CLASS_COLLAPSED = 'collapsed'
const SELECTOR = '.govcy-accordion-button'

/**
 * Class definition
 */
class Accordion extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    const target = document.querySelector(element.dataset.govcyTarget)

    if (!target) {
      return
    }

    this.srcElement = element
    this.targetElement = target

    this.srcElement.addEventListener(EVENT_HANDLER, (e) => {
      e.preventDefault()
      this._toggle()
    })
  }

  _toggle() {
    if (this._isCollapsed()) {
      this._expand()
    } else {
      this._collapse()
    }
  }

  _expand() {
    this.srcElement.classList.remove(CLASS_COLLAPSED)
    this.srcElement.setAttribute('aria-expanded', true)
    this.targetElement.classList.add(CLASS_COLLAPSE)
    this.targetElement.classList.add(CLASS_SHOW)
  }

  _collapse() {
    this.srcElement.classList.add(CLASS_COLLAPSED)
    this.srcElement.setAttribute('aria-expanded', false)
    this.targetElement.classList.add(CLASS_COLLAPSE)
    this.targetElement.classList.remove(CLASS_SHOW)
  }

  _isCollapsed() {
    return this.srcElement.classList.contains(CLASS_COLLAPSED)
  }
}

Accordion.init(SELECTOR)

export default Accordion
