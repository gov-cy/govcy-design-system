import Component from './component.js'

/*
Constants 
*/

const EVENT_HANDLER = 'click'
const CLASS_ACTIVE = 'active'
const CLASS_SHOW = 'show'
const SELECTOR = '.govcy-tab-link'

/**
 * Class definition
 */
class Tab extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    //let i = [1, 2, 3].map(n => n + 1);

    //let n = i.flat();

    const target = document.querySelector(element.dataset.govcyTarget)

    if (!target) {
      return
    }

    this.srcElement = element
    this.targetElement = target

    this.srcElement.addEventListener(EVENT_HANDLER, (e) => {
      e.preventDefault()
      this._activateTab()
    })
  }

  _activateTab() {
    // make active tab

    const tabs = this.srcElement.closest('.govcy-tabs')
    tabs.querySelectorAll('.govcy-tab-link').forEach((element) => {
      element.classList.remove(CLASS_ACTIVE)
      element.setAttribute('aria-selected', false)
    })
    this.srcElement.classList.add(CLASS_ACTIVE)
    this.srcElement.setAttribute('aria-selected', true)

    // show associated tab pane
    const panes = this.targetElement.parentElement
    panes.querySelectorAll('.govcy-tab-pane').forEach((element) => {
      if (element.getAttribute('id') == this.targetElement.getAttribute('id')) {
        element.classList.add(CLASS_ACTIVE)
        element.classList.add(CLASS_SHOW)
      } else {
        element.classList.remove(CLASS_ACTIVE)
        element.classList.remove(CLASS_SHOW)
      }
    })
  }
}

Tab.init(SELECTOR)

export default Tab
