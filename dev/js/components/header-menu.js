import Component from './component.js'

/*
Constants 
*/
const EVENT_HANDLER = 'click'
const SELECTOR = '.govcy-header'

/**
 * Class definition
 */
class HeaderMenu extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    this.header = element

    this.source = {
      globalSearch: this.header.querySelector('.govcy-global-search'),
      mobileMenu: this.header.querySelector('.govcy-mobile-menu')
    }

    this.destination = {
      globalSearch: this.header.querySelector('.govcy-header-search-area'),
      mobileMenu: this.header.querySelector('.govcy-mainmenu')
    }

    if (this.source.globalSearch) {
      this.source.globalSearch.addEventListener(EVENT_HANDLER, (e) => {
        e.preventDefault()
        this._toggle(this.source.globalSearch, this.destination.globalSearch)
      })
    }

    if (this.source.mobileMenu) {
      this.source.mobileMenu.addEventListener(EVENT_HANDLER, (e) => {
        e.preventDefault()
        this._toggle(this.source.mobileMenu, this.destination.mobileMenu)
      })
    }

    const expandBtn = this.header.querySelectorAll('.govcy-expand-btn i')
    expandBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const mobile = window.matchMedia('(max-width: 767px)')
        if (mobile.matches) {
          btn.parentElement.classList.toggle('open')
        }
      })

      btn.addEventListener('keydown', (e) => {
        if (
          e.keyCode == 9 &&
          !btn.parentElement.parentElement.parentElement.classList.contains(
            'govcy-mobile-menu'
          ) &&
          !btn.classList.contains('open')
        ) {
          e.preventDefault()
          btn.classList.toggle('open')
        }
      })
    })

    //Add Aria-expanded when a dropdown list open
    const dropDown = this.header.querySelectorAll('.govcy-dropdown')
    dropDown.forEach((drpdwn) => {
      drpdwn.addEventListener('mouseover', () => {
        drpdwn
          .querySelector('.govcy-expand-btn')
          .setAttribute('aria-expanded', 'true')
      })
      drpdwn.addEventListener('mouseout', () => {
        drpdwn
          .querySelector('.govcy-expand-btn')
          .setAttribute('aria-expanded', 'false')
      })

      drpdwn.addEventListener('focusin', () => {
        drpdwn
          .querySelector('.govcy-expand-btn')
          .setAttribute('aria-expanded', 'true')
      })
      drpdwn.addEventListener('focusout', () => {
        drpdwn
          .querySelector('.govcy-expand-btn')
          .setAttribute('aria-expanded', 'false')
      })
    })

    //Hide language dropdown, contact and menu when not needed
    const mobile = window.matchMedia('(max-width: 767px)')
    addEventListener('resize', () => {
      const desktopOnly = this.header.querySelectorAll(
        '.govcy-desktop-menu-only'
      )
      const mobileOnly = this.header.querySelectorAll('.govcy-mobile-menu-only')

      if (mobile.matches) {
        desktopOnly.forEach((item) => {
          item.hidden = true
        })
        mobileOnly.forEach((item) => {
          item.hidden = false
        })
      } else {
        desktopOnly.forEach((item) => {
          item.hidden = false
        })
        mobileOnly.forEach((item) => {
          item.hidden = true
        })
      }
    })

    dispatchEvent(new Event('resize'))
  }

  _toggle(srcElement, destElement) {
    for (let key in this.destination) {
      if (this.destination[key] !== destElement) {
        this._close(this.source[key], this.destination[key])
      }
    }

    if (srcElement && destElement) {
      srcElement.classList.toggle('open')
      destElement.classList.toggle('open')
    }
  }

  _close(srcElement, destElement) {
    if (srcElement && destElement) {
      srcElement.classList.remove('open')
      destElement.classList.remove('open')
      srcElement.firstElementChild.firstElementChild.classList.remove('open')
    }
  }
}

HeaderMenu.init(SELECTOR)

export default HeaderMenu
