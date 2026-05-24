import Component from './component.js'

/*
Constants 
*/

const SELECTOR = '.govcy-share'
const TOAST_SHOW_CLASS = 'govcy-share__toast--show'
const DEFAULT_TOAST_MESSAGE = 'Copied'
const TOAST_DURATION_MS = 3000

/*
Class definition
*/
class Share extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    // Find all required targets inside the component root.
    this.element = element
    this.shareButton = element.querySelector('.govcy-share__btn')
    this.copyButton = element.querySelector('.govcy-share__copy-btn')
    this.shareMessage = element.querySelector('.govcy-share__message')
    this.smsLink = element.querySelector('.govcy-share__sms')
    this.emailLink = element.querySelector('.govcy-share__email')
    this.toast = element.querySelector('.govcy-share__toast')

    // Configure share content through data-govcy-* attributes.
    this.title = element.dataset.govcyShareTitle || ''
    this.text = element.dataset.govcyShareText || ''
    this.url = element.dataset.govcyShareUrl || ''
    this.copySuccessMessage =
      element.dataset.govcyShareCopySuccessMessage || DEFAULT_TOAST_MESSAGE

    this.payload = this._buildPayload()

    this._setFallbackLinks()
    this._setMessageText()
    this._setupShareButton()
    this._setupCopyButton()
  }

  _buildPayload() {
    // Build a Web Share API payload using only values that exist.
    const payload = {}

    if (this.title) {
      payload.title = this.title
    }

    if (this.text) {
      payload.text = this.text
    }

    if (this.url) {
      payload.url = this.url
    }

    return payload
  }

  _setFallbackLinks() {
    // Keep fallback channels available when native share is unsupported.
    const encodedTitle = encodeURIComponent(this.title)
    const encodedMessage = encodeURIComponent(this.text)

    if (this.smsLink) {
      this.smsLink.href = `sms:?body=${encodedMessage}`
    }

    if (this.emailLink) {
      this.emailLink.href = `mailto:?subject=${encodedTitle}&body=${encodedMessage}`
    }
  }

  _setMessageText() {
    if (this.shareMessage) {
      this.shareMessage.innerText = this.text
    }
  }

  _showToast(message) {
    if (!this.toast) {
      return
    }

    this.toast.innerText = message
    this.toast.classList.add(TOAST_SHOW_CLASS)

    setTimeout(() => {
      this.toast.classList.remove(TOAST_SHOW_CLASS)
    }, TOAST_DURATION_MS)
  }

  _enableAnchorButtonAccessibility(target, callback) {
    if (!target) {
      return
    }

    // Keep anchor-as-button usage keyboard accessible.
    target.addEventListener('click', callback)
    target.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        callback()
      }
    })
  }

  _setupShareButton() {
    if (!this.shareButton) {
      return
    }

    // Progressive enhancement: hide if Web Share API is unavailable.
    if (!navigator.share) {
      this.shareButton.style.display = 'none'
      return
    }

    this._enableAnchorButtonAccessibility(this.shareButton, async () => {
      try {
        await navigator.share(this.payload)
      } catch (err) {
        console.log(err)
      }
    })
  }

  _setupCopyButton() {
    if (!this.copyButton) {
      return
    }

    // Progressive enhancement: hide if Clipboard API is unavailable.
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      this.copyButton.style.display = 'none'
      return
    }

    this._enableAnchorButtonAccessibility(this.copyButton, async () => {
      try {
        await navigator.clipboard.writeText(this.text)
        this._showToast(this.copySuccessMessage)
      } catch (err) {
        console.log(err)
      }
    })
  }
}

Share.init(SELECTOR)

export default Share
