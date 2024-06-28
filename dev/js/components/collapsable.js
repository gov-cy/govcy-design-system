import Component from './component.js'

/*
Constants 
*/

const EVENT_HANDLER = 'click'
const CLASS_SHOW = 'show'
const CLASS_COLLAPSE = 'collapse'
const CLASS_COLLAPSED = 'collapsed'
const SELECTOR = '.govcy-collapsable'

/**
 * Class definition
 */
class Collapsable extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    this.srcElement = element
    this.srcElement.addEventListener(EVENT_HANDLER, () => {
      this._toggle()
    })
  }

  _toggle() {
    const target = document.querySelector(this.srcElement.dataset.govcyTarget)
    if (!target) {
      return
    }
    this.targetElement = target

    if (this._isCollapsed()) {
      this._expand()
    } else {
      this._collapse()
    }
  }

  _expand() {
    this.srcElement.setAttribute('aria-expanded', true)
    this.targetElement.classList.add(CLASS_COLLAPSE)
    this.targetElement.classList.add(CLASS_SHOW)
  }

  _collapse() {
    this.srcElement.setAttribute('aria-expanded', false)
    this.targetElement.classList.add(CLASS_COLLAPSE)
    this.targetElement.classList.remove(CLASS_SHOW)
  }

  _isCollapsed() {
    return this.srcElement.classList.contains(CLASS_COLLAPSED)
  }
}

Collapsable.init(SELECTOR)

export default Collapsable
