import Component from './component.js'

/*
Constants 
*/

const EVENT_HANDLER = 'keyup'
const SELECTOR = '.govcy-character-count'
const CLASS_REMAINING = '.govcy-character-remaining-counter'
const CLASS_MORE = '.govcy-character-more-counter'
const MAX_CHARS_DATA_ATTRIBUTE = 'data-maxchars'
const MAX_WORDS_DATA_ATTRIBUTE = 'data-maxwords'
const COUNT_CHARS = 'chars'
const COUNT_WORDS = 'words'
const DEFAULT_MAX_COUNT = 100

/**
 * Class definition
 */
class CharacterCount extends Component {
  constructor(element) {
    super()

    if (!element) {
      return
    }

    if (
      !element.previousElementSibling &&
      element.previousElementSibling.nodeName !== 'TEXTAREA'
    ) {
      return
    }

    this.element = element
    this.elementToCount = this.element.previousElementSibling

    const counters = [...this.element.getElementsByTagName('span')]
    if (!counters || !counters.length) {
      return
    }
    this.counters = counters
    this.maxCount = DEFAULT_MAX_COUNT
    this.whatToCount = COUNT_CHARS

    if (this.element.hasAttribute(MAX_CHARS_DATA_ATTRIBUTE)) {
      this.maxCount = Number.parseInt(this.element.dataset.maxchars, 10)
      this.whatToCount = COUNT_CHARS
    }

    if (this.element.hasAttribute(MAX_WORDS_DATA_ATTRIBUTE)) {
      this.maxCount = Number.parseInt(this.element.dataset.maxwords, 10)
      this.whatToCount = COUNT_WORDS
    }

    this._updateCounters()

    this.elementToCount.addEventListener(EVENT_HANDLER, () => {
      this._updateCounters()
    })
  }

  _maxCount() {
    return this.maxCount
  }

  _currentCount() {
    if (this.whatToCount == COUNT_CHARS) {
      return this.elementToCount.value.length
    } else {
      return this.elementToCount.value.split(' ').length - 1
    }
  }

  _updateCounters() {
    let total = this._maxCount() - this._currentCount()

    const remaining = this.element.querySelector(CLASS_REMAINING),
      more = this.element.querySelector(CLASS_MORE)

    this.counters.forEach((el) => {
      el.innerText = Math.abs(total)
    })

    if (remaining) {
      remaining.style.display = total < 0 ? 'none' : 'block'
    }

    if (more) {
      more.style.display = total >= 0 ? 'none' : 'block'
    }

    if (total < 0) {
      this.elementToCount.classList.add('govcy-text-area-error')
    } else {
      this.elementToCount.classList.remove('govcy-text-area-error')
    }
  }
}

CharacterCount.init(SELECTOR)

export default CharacterCount
