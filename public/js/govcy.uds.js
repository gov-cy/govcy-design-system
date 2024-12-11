/*!
 * gov.cy UDS v3.0.1
 */
// eslint-disable-next-line no-unused-vars
let GOVCY = (function (exports) {
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
  } /*
Constants 
*/

  const EVENT_HANDLER$4 = 'click'
  const CLASS_SHOW$2 = 'show'
  const CLASS_COLLAPSE$1 = 'collapse'
  const CLASS_COLLAPSED$1 = 'collapsed'
  const SELECTOR$7 = '.govcy-accordion-button'

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

      this.srcElement.addEventListener(EVENT_HANDLER$4, (e) => {
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
      this.srcElement.classList.remove(CLASS_COLLAPSED$1)
      this.srcElement.setAttribute('aria-expanded', true)
      this.targetElement.classList.add(CLASS_COLLAPSE$1)
      this.targetElement.classList.add(CLASS_SHOW$2)
    }

    _collapse() {
      this.srcElement.classList.add(CLASS_COLLAPSED$1)
      this.srcElement.setAttribute('aria-expanded', false)
      this.targetElement.classList.add(CLASS_COLLAPSE$1)
      this.targetElement.classList.remove(CLASS_SHOW$2)
    }

    _isCollapsed() {
      return this.srcElement.classList.contains(CLASS_COLLAPSED$1)
    }
  }

  Accordion.init(SELECTOR$7) /*
Constants 
*/

  const EVENT_HANDLER$3 = 'keyup'
  const SELECTOR$6 = '.govcy-character-count'
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

      this.elementToCount.addEventListener(EVENT_HANDLER$3, () => {
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

  CharacterCount.init(SELECTOR$6) /*
Constants 
*/

  const EVENT_HANDLER$2 = 'click'
  const CLASS_SHOW$1 = 'show'
  const CLASS_COLLAPSE = 'collapse'
  const CLASS_COLLAPSED = 'collapsed'
  const SELECTOR$5 = '.govcy-collapsable'

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
      this.srcElement.addEventListener(EVENT_HANDLER$2, () => {
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
      this.targetElement.classList.add(CLASS_SHOW$1)
    }

    _collapse() {
      this.srcElement.setAttribute('aria-expanded', false)
      this.targetElement.classList.add(CLASS_COLLAPSE)
      this.targetElement.classList.remove(CLASS_SHOW$1)
    }

    _isCollapsed() {
      return this.srcElement.classList.contains(CLASS_COLLAPSED)
    }
  }

  Collapsable.init(SELECTOR$5) // iOS detection from: http://stackoverflow.com/a/9039885/177710
  function isIosDevice() {
    return (
      typeof navigator !== 'undefined' &&
      (navigator.userAgent.match(/(iPod|iPhone|iPad)/g) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
      !window.MSStream
    )
  } /* eslint-disable */
  /* globals define, module */

  /**
   * A simple library to help you escape HTML using template strings.
   *
   * It's the counterpart to our eslint "no-unsafe-innerhtml" plugin that helps us
   * avoid unsafe coding practices.
   * A full write-up of the Hows and Whys are documented
   * for developers at
   *  https://developer.mozilla.org/en-US/Firefox_OS/Security/Security_Automation
   * with additional background information and design docs at
   *  https://wiki.mozilla.org/User:Fbraun/Gaia/SafeinnerHTMLRoadmap
   *
   */

  const Sanitizer = {
    _entity: /[&<>"'/]/g,

    _entities: {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
      '/': '&#x2F;'
    },

    getEntity: function (s) {
      return Sanitizer._entities[s]
    },

    /**
     * Escapes HTML for all values in a tagged template string.
     */
    escapeHTML: function (strings) {
      var result = ''

      for (var i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i + 1 < arguments.length) {
          var value = arguments[i + 1] || ''
          result += String(value).replace(
            Sanitizer._entity,
            Sanitizer.getEntity
          )
        }
      }

      return result
    },
    /**
     * Escapes HTML and returns a wrapped object to be used during DOM insertion
     */
    createSafeHTML: function (strings) {
      var _len = arguments.length
      var values = new Array(_len > 1 ? _len - 1 : 0)
      for (var _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key]
      }

      var escaped = Sanitizer.escapeHTML.apply(
        Sanitizer,
        [strings].concat(values)
      )
      return {
        __html: escaped,
        toString: function () {
          return '[object WrappedHTMLObject]'
        },
        info:
          'This is a wrapped HTML object. See https://developer.mozilla.or' +
          'g/en-US/Firefox_OS/Security/Security_Automation for more.'
      }
    },
    /**
     * Unwrap safe HTML created by createSafeHTML or a custom replacement that
     * underwent security review.
     */
    unwrapSafeHTML: function () {
      var _len = arguments.length
      var htmlObjects = new Array(_len)
      for (var _key = 0; _key < _len; _key++) {
        htmlObjects[_key] = arguments[_key]
      }

      var markupList = htmlObjects.map(function (obj) {
        return obj.__html
      })
      return markupList.join('')
    }
  }
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
  } /*
Constants 
*/

  const DATE_PICKER_CLASS = `govcy-date-picker`
  const SELECTOR$4 = `.${DATE_PICKER_CLASS}`
  const DATE_PICKER_WRAPPER_CLASS = `${DATE_PICKER_CLASS}__wrapper`
  const DATE_PICKER_INITIALIZED_CLASS = `${DATE_PICKER_CLASS}--initialized`
  const DATE_PICKER_ACTIVE_CLASS = `${DATE_PICKER_CLASS}--active`
  const DATE_PICKER_INTERNAL_INPUT_CLASS = `${DATE_PICKER_CLASS}__internal-input`
  const DATE_PICKER_EXTERNAL_INPUT_CLASS = `${DATE_PICKER_CLASS}__external-input`
  const DATE_PICKER_BUTTON_CLASS = `${DATE_PICKER_CLASS}__button`
  const DATE_PICKER_CALENDAR_CLASS = `${DATE_PICKER_CLASS}__calendar`
  const DATE_PICKER_STATUS_CLASS = `${DATE_PICKER_CLASS}__status`
  const CALENDAR_DATE_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__date`

  const CALENDAR_DATE_FOCUSED_CLASS = `${CALENDAR_DATE_CLASS}--focused`
  const CALENDAR_DATE_SELECTED_CLASS = `${CALENDAR_DATE_CLASS}--selected`
  const CALENDAR_DATE_PREVIOUS_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--previous-month`
  const CALENDAR_DATE_CURRENT_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--current-month`
  const CALENDAR_DATE_NEXT_MONTH_CLASS = `${CALENDAR_DATE_CLASS}--next-month`
  const CALENDAR_DATE_RANGE_DATE_CLASS = `${CALENDAR_DATE_CLASS}--range-date`
  const CALENDAR_DATE_TODAY_CLASS = `${CALENDAR_DATE_CLASS}--today`
  const CALENDAR_DATE_RANGE_DATE_START_CLASS = `${CALENDAR_DATE_CLASS}--range-date-start`
  const CALENDAR_DATE_RANGE_DATE_END_CLASS = `${CALENDAR_DATE_CLASS}--range-date-end`
  const CALENDAR_DATE_WITHIN_RANGE_CLASS = `${CALENDAR_DATE_CLASS}--within-range`
  const CALENDAR_PREVIOUS_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-year`
  const CALENDAR_PREVIOUS_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-month`
  const CALENDAR_NEXT_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-year`
  const CALENDAR_NEXT_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-month`
  const CALENDAR_MONTH_SELECTION_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-selection`
  const CALENDAR_YEAR_SELECTION_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year-selection`
  const CALENDAR_MONTH_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month`
  const CALENDAR_MONTH_FOCUSED_CLASS = `${CALENDAR_MONTH_CLASS}--focused`
  const CALENDAR_MONTH_SELECTED_CLASS = `${CALENDAR_MONTH_CLASS}--selected`
  const CALENDAR_YEAR_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year`
  const CALENDAR_YEAR_FOCUSED_CLASS = `${CALENDAR_YEAR_CLASS}--focused`
  const CALENDAR_YEAR_SELECTED_CLASS = `${CALENDAR_YEAR_CLASS}--selected`
  const CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__previous-year-chunk`
  const CALENDAR_NEXT_YEAR_CHUNK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__next-year-chunk`
  const CALENDAR_DATE_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__date-picker`
  const CALENDAR_MONTH_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-picker`
  const CALENDAR_YEAR_PICKER_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__year-picker`
  const CALENDAR_TABLE_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__table`
  const CALENDAR_ROW_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__row`
  const CALENDAR_CELL_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__cell`
  const CALENDAR_CELL_CENTER_ITEMS_CLASS = `${CALENDAR_CELL_CLASS}--center-items`
  const CALENDAR_MONTH_LABEL_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__month-label`
  const CALENDAR_DAY_OF_WEEK_CLASS = `${DATE_PICKER_CALENDAR_CLASS}__day-of-week`

  const DATE_PICKER = `.${DATE_PICKER_CLASS}`
  const DATE_PICKER_BUTTON = `.${DATE_PICKER_BUTTON_CLASS}`
  const DATE_PICKER_INTERNAL_INPUT = `.${DATE_PICKER_INTERNAL_INPUT_CLASS}`
  const DATE_PICKER_EXTERNAL_INPUT = `.${DATE_PICKER_EXTERNAL_INPUT_CLASS}`
  const DATE_PICKER_CALENDAR = `.${DATE_PICKER_CALENDAR_CLASS}`
  const DATE_PICKER_STATUS = `.${DATE_PICKER_STATUS_CLASS}`
  //const CALENDAR_DATE = `.${CALENDAR_DATE_CLASS}`;
  const CALENDAR_DATE_FOCUSED = `.${CALENDAR_DATE_FOCUSED_CLASS}`
  const CALENDAR_DATE_CURRENT_MONTH = `.${CALENDAR_DATE_CURRENT_MONTH_CLASS}`
  const CALENDAR_PREVIOUS_YEAR = `.${CALENDAR_PREVIOUS_YEAR_CLASS}`
  const CALENDAR_PREVIOUS_MONTH = `.${CALENDAR_PREVIOUS_MONTH_CLASS}`
  const CALENDAR_NEXT_YEAR = `.${CALENDAR_NEXT_YEAR_CLASS}`
  const CALENDAR_NEXT_MONTH = `.${CALENDAR_NEXT_MONTH_CLASS}`
  const CALENDAR_YEAR_SELECTION = `.${CALENDAR_YEAR_SELECTION_CLASS}`
  const CALENDAR_MONTH_SELECTION = `.${CALENDAR_MONTH_SELECTION_CLASS}`
  const CALENDAR_MONTH = `.${CALENDAR_MONTH_CLASS}`
  const CALENDAR_YEAR = `.${CALENDAR_YEAR_CLASS}`
  const CALENDAR_PREVIOUS_YEAR_CHUNK = `.${CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS}`
  const CALENDAR_NEXT_YEAR_CHUNK = `.${CALENDAR_NEXT_YEAR_CHUNK_CLASS}`
  const CALENDAR_DATE_PICKER = `.${CALENDAR_DATE_PICKER_CLASS}`
  //const CALENDAR_MONTH_PICKER = `.${CALENDAR_MONTH_PICKER_CLASS}`;
  const CALENDAR_YEAR_PICKER = `.${CALENDAR_YEAR_PICKER_CLASS}`
  const CALENDAR_MONTH_FOCUSED = `.${CALENDAR_MONTH_FOCUSED_CLASS}`
  const CALENDAR_YEAR_FOCUSED = `.${CALENDAR_YEAR_FOCUSED_CLASS}`

  //let VALIDATION_MESSAGE = "Please enter a valid date";

  let MONTH_LABELS = [
    'Ιανουάριος',
    'Φεβρουάριος',
    'Μάρτιος',
    'Απρίλιος',
    'Μάϊος',
    'Ιούνιος',
    'Ιούλιος',
    'Αύγουστος',
    'Σεπτέμβριος',
    'Οκτώβριος',
    'Νοέμβριος',
    'Δεκέμβριος'
  ]

  let DAY_OF_WEEK_LABELS = [
    'Κυριακή',
    'Δευτέρα',
    'Τρίτη',
    'Τετάρτη',
    'Πέμπτη',
    'Παρασκευή',
    'Σάββατο'
  ]

  let DAYS_OF_WEEK_LABELS = {
    Sunday: 'Κυ',
    Monday: 'Δ',
    Tuesday: 'Τρ',
    Wednesday: 'Τε',
    Thursday: 'Πε',
    Friday: 'Πα',
    Saturday: 'Σα'
  }

  const YEAR_CHUNK = 12
  const DEFAULT_MIN_DATE = '0000-01-01'
  const DEFAULT_EXTERNAL_DATE_FORMAT = 'DD/MM/YYYY'
  const INTERNAL_DATE_FORMAT = 'YYYY-MM-DD'

  const NOT_DISABLED_SELECTOR = ':not([disabled])'

  const processFocusableSelectors = (...selectors) =>
    selectors.map((query) => query + NOT_DISABLED_SELECTOR).join(', ')

  const DATE_PICKER_FOCUSABLE = processFocusableSelectors(
    CALENDAR_PREVIOUS_YEAR,
    CALENDAR_PREVIOUS_MONTH,
    CALENDAR_YEAR_SELECTION,
    CALENDAR_MONTH_SELECTION,
    CALENDAR_NEXT_YEAR,
    CALENDAR_NEXT_MONTH,
    CALENDAR_DATE_FOCUSED
  )

  const MONTH_PICKER_FOCUSABLE = processFocusableSelectors(
    CALENDAR_MONTH_FOCUSED
  )

  const YEAR_PICKER_FOCUSABLE = processFocusableSelectors(
    CALENDAR_PREVIOUS_YEAR_CHUNK,
    CALENDAR_NEXT_YEAR_CHUNK,
    CALENDAR_YEAR_FOCUSED
  )

  /**
   * Class definition
   */
  class DatePicker extends Component {
    constructor(el) {
      super()

      if (!el) {
        return
      }

      this.el = el

      this.detectLocale()
      this.enhanceDatePicker(el)
    }

    enhanceDatePicker(el) {
      const datePickerEl = el.closest(DATE_PICKER)
      const { defaultValue } = datePickerEl.dataset

      const internalInputEl = datePickerEl.querySelector(`input`)

      if (!internalInputEl) {
        throw new Error(`${DATE_PICKER} is missing inner input`)
      }

      if (internalInputEl.value) {
        internalInputEl.value = ''
      }

      const minDate = this.parseDateString(
        datePickerEl.dataset.minDate || internalInputEl.getAttribute('min')
      )
      datePickerEl.dataset.minDate = minDate
        ? this.formatDate(minDate)
        : DEFAULT_MIN_DATE

      const maxDate = this.parseDateString(
        datePickerEl.dataset.maxDate || internalInputEl.getAttribute('max')
      )
      if (maxDate) {
        datePickerEl.dataset.maxDate = this.formatDate(maxDate)
      }

      const calendarWrapper = document.createElement('div')
      calendarWrapper.classList.add(DATE_PICKER_WRAPPER_CLASS)

      const externalInputEl = internalInputEl.cloneNode()
      externalInputEl.classList.add(DATE_PICKER_EXTERNAL_INPUT_CLASS)
      externalInputEl.type = 'text'

      calendarWrapper.appendChild(externalInputEl)
      calendarWrapper.insertAdjacentHTML(
        'beforeend',
        Sanitizer.escapeHTML`
          <button type="button" class="${DATE_PICKER_BUTTON_CLASS}" aria-haspopup="true" aria-label="Toggle calendar"></button>
          <div class="${DATE_PICKER_CALENDAR_CLASS}" role="dialog" aria-modal="true" hidden></div>
          <div class="visually-hidden ${DATE_PICKER_STATUS_CLASS}" role="status" aria-live="polite"></div>`
      )

      internalInputEl.setAttribute('aria-hidden', 'true')
      internalInputEl.setAttribute('tabindex', '-1')
      internalInputEl.style.display = 'none'
      internalInputEl.classList.add(DATE_PICKER_INTERNAL_INPUT_CLASS)
      internalInputEl.removeAttribute('id')
      internalInputEl.removeAttribute('name')
      internalInputEl.required = false
      internalInputEl.setAttribute('hidden', '')

      datePickerEl.appendChild(calendarWrapper)
      datePickerEl.classList.add(DATE_PICKER_INITIALIZED_CLASS)

      if (defaultValue) {
        this.setCalendarValue(datePickerEl, defaultValue)
      }

      if (internalInputEl.disabled) {
        this.disable(datePickerEl)
        internalInputEl.disabled = false
      }

      this.datePickerEvents(el)
    }

    detectLocale() {
      /* eslint-disable  no-undef */

      if (typeof govcyDatePickerLocale === 'undefined') {
        return
      }

      MONTH_LABELS = govcyDatePickerLocale.monthLabels
      DAY_OF_WEEK_LABELS = govcyDatePickerLocale.daysOfWeekLabels
      DAYS_OF_WEEK_LABELS = govcyDatePickerLocale.daysOfWeekLabelsShort

      /* eslint-enable no-undef */
    }

    getDatePickerContext(el) {
      const datePickerEl = el.closest(DATE_PICKER)

      if (!datePickerEl) {
        throw new Error(`Element is missing outer ${DATE_PICKER}`)
      }

      const internalInputEl = datePickerEl.querySelector(
        DATE_PICKER_INTERNAL_INPUT
      )
      const externalInputEl = datePickerEl.querySelector(
        DATE_PICKER_EXTERNAL_INPUT
      )
      const calendarEl = datePickerEl.querySelector(DATE_PICKER_CALENDAR)
      const toggleBtnEl = datePickerEl.querySelector(DATE_PICKER_BUTTON)
      const statusEl = datePickerEl.querySelector(DATE_PICKER_STATUS)
      const firstYearChunkEl = datePickerEl.querySelector(CALENDAR_YEAR)

      const inputDate = this.parseDateString(
        externalInputEl.value,
        DEFAULT_EXTERNAL_DATE_FORMAT,
        true
      )
      const selectedDate = this.parseDateString(internalInputEl.value)

      const calendarDate = this.parseDateString(calendarEl.dataset.value)
      const minDate = this.parseDateString(datePickerEl.dataset.minDate)
      const maxDate = this.parseDateString(datePickerEl.dataset.maxDate)
      const rangeDate = this.parseDateString(datePickerEl.dataset.rangeDate)
      const defaultDate = this.parseDateString(datePickerEl.dataset.defaultDate)

      if (minDate && maxDate && minDate > maxDate) {
        throw new Error('Minimum date cannot be after maximum date')
      }

      return {
        calendarDate,
        minDate,
        toggleBtnEl,
        selectedDate,
        maxDate,
        firstYearChunkEl,
        datePickerEl,
        inputDate,
        internalInputEl,
        externalInputEl,
        calendarEl,
        rangeDate,
        defaultDate,
        statusEl
      }
    }

    disable(el) {
      const { externalInputEl, toggleBtnEl } = this.getDatePickerContext(el)

      toggleBtnEl.disabled = true
      externalInputEl.disabled = true
    }

    enable(el) {
      const { externalInputEl, toggleBtnEl } = this.getDatePickerContext(el)

      toggleBtnEl.disabled = false
      externalInputEl.disabled = false
    }

    isDateInputInvalid(el) {
      const { externalInputEl, minDate, maxDate } =
        this.getDatePickerContext(el)

      const dateString = externalInputEl.value
      let isInvalid = false

      if (dateString) {
        isInvalid = true

        const dateStringParts = dateString.split('/')
        const [month, day, year] = dateStringParts.map((str) => {
          let value
          const parsed = parseInt(str, 10)
          if (!Number.isNaN(parsed)) value = parsed
          return value
        })

        if (month && day && year != null) {
          const checkDate = this.setDate(year, month - 1, day)

          if (
            checkDate.getMonth() === month - 1 &&
            checkDate.getDate() === day &&
            checkDate.getFullYear() === year &&
            dateStringParts[2].length === 4 &&
            this.isDateWithinMinAndMax(checkDate, minDate, maxDate)
          ) {
            isInvalid = false
          }
        }
      }

      return isInvalid
    }

    setCalendarValue(el, dateString) {
      const parsedDate = this.parseDateString(dateString)

      if (parsedDate) {
        const formattedDate = this.formatDate(
          parsedDate,
          DEFAULT_EXTERNAL_DATE_FORMAT
        )

        const { internalInputEl, externalInputEl } =
          this.getDatePickerContext(el)
        //const { datePickerEl, internalInputEl, externalInputEl } = this.getDatePickerContext(el);

        this.changeElementValue(internalInputEl, dateString)
        this.changeElementValue(externalInputEl, formattedDate)

        //this.validateDateInput(datePickerEl);
      }
    }

    parseDateString(
      dateString,
      dateFormat = INTERNAL_DATE_FORMAT,
      adjustDate = false
    ) {
      let date
      let month
      let day
      let year
      let parsed

      if (dateString) {
        let monthStr
        let dayStr
        let yearStr

        if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
          ;[dayStr, monthStr, yearStr] = dateString.split('/')
        } else {
          ;[yearStr, monthStr, dayStr] = dateString.split('-')
        }

        if (yearStr) {
          parsed = parseInt(yearStr, 10)
          if (!Number.isNaN(parsed)) {
            year = parsed
            if (adjustDate) {
              year = Math.max(0, year)
              if (yearStr.length < 3) {
                const currentYear = this.today().getFullYear()
                const currentYearStub =
                  currentYear - (currentYear % 10 ** yearStr.length)
                year = currentYearStub + parsed
              }
            }
          }
        }

        if (monthStr) {
          parsed = parseInt(monthStr, 10)
          if (!Number.isNaN(parsed)) {
            month = parsed
            if (adjustDate) {
              month = Math.max(1, month)
              month = Math.min(12, month)
            }
          }
        }

        if (month && dayStr && year != null) {
          parsed = parseInt(dayStr, 10)
          if (!Number.isNaN(parsed)) {
            day = parsed
            if (adjustDate) {
              const lastDayOfTheMonth = this.setDate(year, month, 0).getDate()
              day = Math.max(1, day)
              day = Math.min(lastDayOfTheMonth, day)
            }
          }
        }

        if (month && day && year != null) {
          date = this.setDate(year, month - 1, day)
        }
      }

      return date
    }

    today() {
      const newDate = new Date()
      const day = newDate.getDate()
      const month = newDate.getMonth()
      const year = newDate.getFullYear()
      return this.setDate(year, month, day)
    }

    keepDateWithinMonth(dateToCheck, month) {
      if (month !== dateToCheck.getMonth()) {
        dateToCheck.setDate(0)
      }

      return dateToCheck
    }

    startOfMonth(date) {
      const newDate = new Date(0)
      newDate.setFullYear(date.getFullYear(), date.getMonth(), 1)
      return newDate
    }

    lastDayOfMonth(date) {
      const newDate = new Date(0)
      newDate.setFullYear(date.getFullYear(), date.getMonth() + 1, 0)
      return newDate
    }

    addDays(_date, numDays) {
      const newDate = new Date(_date.getTime())
      newDate.setDate(newDate.getDate() + numDays)
      return newDate
    }

    subDays(_date, numDays) {
      return this.addDays(_date, -numDays)
    }

    addWeeks(_date, numWeeks) {
      return this.addDays(_date, numWeeks * 7)
    }

    subWeeks(_date, numWeeks) {
      return this.addWeeks(_date, -numWeeks)
    }

    startOfWeek(_date) {
      const dayOfWeek = _date.getDay()
      return this.subDays(_date, dayOfWeek)
    }

    endOfWeek(_date) {
      const dayOfWeek = _date.getDay()
      return this.addDays(_date, 6 - dayOfWeek)
    }

    addMonths(_date, numMonths) {
      const newDate = new Date(_date.getTime())
      const dateMonth = (newDate.getMonth() + 12 + numMonths) % 12
      newDate.setMonth(newDate.getMonth() + numMonths)
      this.keepDateWithinMonth(newDate, dateMonth)

      return newDate
    }

    subMonths(_date, numMonths) {
      return this.addMonths(_date, -numMonths)
    }

    addYears(_date, numYears) {
      return this.addMonths(_date, numYears * 12)
    }

    subYears(_date, numYears) {
      return this.addYears(_date, -numYears)
    }

    setMonth(_date, month) {
      const newDate = new Date(_date.getTime())

      newDate.setMonth(month)
      this.keepDateWithinMonth(newDate, month)
      return newDate
    }

    setYear(_date, year) {
      const newDate = new Date(_date.getTime())
      const month = newDate.getMonth()
      newDate.setFullYear(year)
      this.keepDateWithinMonth(newDate, month)

      return newDate
    }

    min(dateA, dateB) {
      let newDate = dateA

      if (dateB < dateA) {
        newDate = dateB
      }

      return new Date(newDate.getTime())
    }

    max(dateA, dateB) {
      let newDate = dateA

      if (dateB > dateA) {
        newDate = dateB
      }

      return new Date(newDate.getTime())
    }

    isSameYear(dateA, dateB) {
      return dateA && dateB && dateA.getFullYear() === dateB.getFullYear()
    }

    isSameMonth(dateA, dateB) {
      return (
        this.isSameYear(dateA, dateB) && dateA.getMonth() === dateB.getMonth()
      )
    }

    isSameDay(dateA, dateB) {
      return (
        this.isSameMonth(dateA, dateB) && dateA.getDate() === dateB.getDate()
      )
    }

    keepDateBetweenMinAndMax(date, minDate, maxDate) {
      let newDate = date

      if (date < minDate) {
        newDate = minDate
      } else if (maxDate && date > maxDate) {
        newDate = maxDate
      }

      return new Date(newDate.getTime())
    }

    isDatesMonthOutsideMinOrMax(date, minDate, maxDate) {
      return (
        this.lastDayOfMonth(date) < minDate ||
        (maxDate && this.startOfMonth(date) > maxDate)
      )
    }

    isDatesYearOutsideMinOrMax(date, minDate, maxDate) {
      return (
        this.lastDayOfMonth(this.setMonth(date, 11)) < minDate ||
        (maxDate && this.startOfMonth(this.setMonth(date, 0)) > maxDate)
      )
    }

    formatDate(date, dateFormat = INTERNAL_DATE_FORMAT) {
      const padZeros = (value, length) => `0000${value}`.slice(-length)

      const month = date.getMonth() + 1
      const day = date.getDate()
      const year = date.getFullYear()

      if (dateFormat === DEFAULT_EXTERNAL_DATE_FORMAT) {
        return [padZeros(day, 2), padZeros(month, 2), padZeros(year, 4)].join(
          '/'
        )
      }

      return [padZeros(year, 4), padZeros(month, 2), padZeros(day, 2)].join('-')
    }

    setDate(year, month, date) {
      const newDate = new Date(0)
      newDate.setFullYear(year, month, date)
      return newDate
    }

    isDateWithinMinAndMax(date, minDate, maxDate) {
      return date >= minDate && (!maxDate || date <= maxDate)
    }

    changeElementValue(el, value = '') {
      const elementToChange = el
      elementToChange.value = value

      const event = new CustomEvent('change', {
        bubbles: true,
        cancelable: true,
        detail: { value }
      })
      elementToChange.dispatchEvent(event)
    }

    // validateDateInput(el) {
    //     const { externalInputEl } = this.getDatePickerContext(el);
    //     const isInvalid = this.isDateInputInvalid(externalInputEl);

    //     if (isInvalid && !externalInputEl.validationMessage) {
    //       externalInputEl.setCustomValidity(VALIDATION_MESSAGE);
    //     }

    //     if (!isInvalid && externalInputEl.validationMessage === VALIDATION_MESSAGE) {
    //       externalInputEl.setCustomValidity("");
    //     }
    // }

    reconcileInputValues(el) {
      const { internalInputEl, inputDate } = this.getDatePickerContext(el)
      let newValue = ''

      if (inputDate && !this.isDateInputInvalid(el)) {
        newValue = this.formatDate(inputDate)
      }

      if (internalInputEl.value !== newValue) {
        this.changeElementValue(internalInputEl, newValue)
      }
    }

    renderCalendar(el, _dateToDisplay) {
      const {
        datePickerEl,
        calendarEl,
        statusEl,
        selectedDate,
        maxDate,
        minDate,
        rangeDate
      } = this.getDatePickerContext(el)
      const todaysDate = this.today()
      let dateToDisplay = _dateToDisplay || todaysDate

      const calendarWasHidden = calendarEl.hidden

      const focusedDate = this.addDays(dateToDisplay, 0)
      const focusedMonth = dateToDisplay.getMonth()
      const focusedYear = dateToDisplay.getFullYear()

      const prevMonth = this.subMonths(dateToDisplay, 1)
      const nextMonth = this.addMonths(dateToDisplay, 1)

      const currentFormattedDate = this.formatDate(dateToDisplay)

      const firstOfMonth = this.startOfMonth(dateToDisplay)
      const prevButtonsDisabled = this.isSameMonth(dateToDisplay, minDate)
      const nextButtonsDisabled = this.isSameMonth(dateToDisplay, maxDate)

      const rangeConclusionDate = selectedDate || dateToDisplay
      const rangeStartDate =
        rangeDate && this.min(rangeConclusionDate, rangeDate)
      const rangeEndDate = rangeDate && this.max(rangeConclusionDate, rangeDate)

      const withinRangeStartDate = rangeDate && this.addDays(rangeStartDate, 1)
      const withinRangeEndDate = rangeDate && this.subDays(rangeEndDate, 1)

      const monthLabel = MONTH_LABELS[focusedMonth]

      const generateDateHtml = (dateToRender) => {
        const classes = [CALENDAR_DATE_CLASS]
        const day = dateToRender.getDate()
        const month = dateToRender.getMonth()
        const year = dateToRender.getFullYear()
        const dayOfWeek = dateToRender.getDay()

        const formattedDate = this.formatDate(dateToRender)

        let tabindex = '-1'

        const isDisabled = !this.isDateWithinMinAndMax(
          dateToRender,
          minDate,
          maxDate
        )
        const isSelected = this.isSameDay(dateToRender, selectedDate)

        if (this.isSameMonth(dateToRender, prevMonth)) {
          classes.push(CALENDAR_DATE_PREVIOUS_MONTH_CLASS)
        }

        if (this.isSameMonth(dateToRender, focusedDate)) {
          classes.push(CALENDAR_DATE_CURRENT_MONTH_CLASS)
        }

        if (this.isSameMonth(dateToRender, nextMonth)) {
          classes.push(CALENDAR_DATE_NEXT_MONTH_CLASS)
        }

        if (isSelected) {
          classes.push(CALENDAR_DATE_SELECTED_CLASS)
        }

        if (this.isSameDay(dateToRender, todaysDate)) {
          classes.push(CALENDAR_DATE_TODAY_CLASS)
        }

        if (rangeDate) {
          if (this.isSameDay(dateToRender, rangeDate)) {
            classes.push(CALENDAR_DATE_RANGE_DATE_CLASS)
          }

          if (this.isSameDay(dateToRender, rangeStartDate)) {
            classes.push(CALENDAR_DATE_RANGE_DATE_START_CLASS)
          }

          if (this.isSameDay(dateToRender, rangeEndDate)) {
            classes.push(CALENDAR_DATE_RANGE_DATE_END_CLASS)
          }

          if (
            this.isDateWithinMinAndMax(
              dateToRender,
              withinRangeStartDate,
              withinRangeEndDate
            )
          ) {
            classes.push(CALENDAR_DATE_WITHIN_RANGE_CLASS)
          }
        }

        if (this.isSameDay(dateToRender, focusedDate)) {
          tabindex = '0'
          classes.push(CALENDAR_DATE_FOCUSED_CLASS)
        }

        const monthStr = MONTH_LABELS[month]
        const dayStr = DAY_OF_WEEK_LABELS[dayOfWeek]

        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('tabindex', tabindex)
        btn.setAttribute('class', classes.join(' '))
        btn.setAttribute('data-day', day)
        btn.setAttribute('data-month', month + 1)
        btn.setAttribute('data-year', year)
        btn.setAttribute('data-value', formattedDate)
        btn.setAttribute(
          'aria-label',
          Sanitizer.escapeHTML`${day} ${monthStr} ${year} ${dayStr}`
        )
        btn.setAttribute('aria-selected', isSelected ? 'true' : 'false')
        if (isDisabled === true) {
          btn.disabled = true
        }
        btn.textContent = day

        return btn
      }

      // set date to first rendered day
      dateToDisplay = this.startOfWeek(firstOfMonth)

      const days = []

      while (
        days.length < 28 ||
        dateToDisplay.getMonth() === focusedMonth ||
        days.length % 7 !== 0
      ) {
        days.push(generateDateHtml(dateToDisplay))
        dateToDisplay = this.addDays(dateToDisplay, 1)
      }

      const datesGrid = this.listToGridHtml(days, 7)

      const newCalendar = calendarEl.cloneNode()
      newCalendar.dataset.value = currentFormattedDate
      newCalendar.style.top = `${datePickerEl.offsetHeight}px`
      newCalendar.hidden = false
      newCalendar.innerHTML = Sanitizer.escapeHTML`
          <div tabindex="-1" class="${CALENDAR_DATE_PICKER_CLASS}">
            <div class="${CALENDAR_ROW_CLASS}">
              <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
                <button
                  type="button"
                  class="${CALENDAR_PREVIOUS_YEAR_CLASS}"
                  aria-label="Navigate back one year"
                  ${prevButtonsDisabled ? `disabled="disabled"` : ''}
                ></button>
              </div>
              <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
                <button
                  type="button"
                  class="${CALENDAR_PREVIOUS_MONTH_CLASS}"
                  aria-label="Navigate back one month"
                  ${prevButtonsDisabled ? `disabled="disabled"` : ''}
                ></button>
              </div>
              <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_MONTH_LABEL_CLASS}">
                <button
                  type="button"
                  class="${CALENDAR_MONTH_SELECTION_CLASS}" aria-label="${monthLabel}. Click to select month"
                >${monthLabel}</button>
                <button
                  type="button"
                  class="${CALENDAR_YEAR_SELECTION_CLASS}" aria-label="${focusedYear}. Click to select year"
                >${focusedYear}</button>
              </div>
              <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
                <button
                  type="button"
                  class="${CALENDAR_NEXT_MONTH_CLASS}"
                  aria-label="Navigate forward one month"
                  ${nextButtonsDisabled ? `disabled="disabled"` : ''}
                ></button>
              </div>
              <div class="${CALENDAR_CELL_CLASS} ${CALENDAR_CELL_CENTER_ITEMS_CLASS}">
                <button
                  type="button"
                  class="${CALENDAR_NEXT_YEAR_CLASS}"
                  aria-label="Navigate forward one year"
                  ${nextButtonsDisabled ? `disabled="disabled"` : ''}
                ></button>
              </div>
            </div>
          </div>
          `

      const table = document.createElement('table')
      table.setAttribute('class', CALENDAR_TABLE_CLASS)
      table.setAttribute('role', 'presentation')

      const tableHead = document.createElement('thead')
      table.insertAdjacentElement('beforeend', tableHead)
      const tableHeadRow = document.createElement('tr')
      tableHead.insertAdjacentElement('beforeend', tableHeadRow)

      const daysOfWeek = DAYS_OF_WEEK_LABELS

      Object.keys(daysOfWeek).forEach((key) => {
        const th = document.createElement('th')
        th.setAttribute('class', CALENDAR_DAY_OF_WEEK_CLASS)
        th.setAttribute('scope', 'presentation')
        th.setAttribute('aria-label', key)
        th.textContent = daysOfWeek[key]
        tableHeadRow.insertAdjacentElement('beforeend', th)
      })

      const tableBody = this.createTableBody(datesGrid)
      table.insertAdjacentElement('beforeend', tableBody)

      // Container for Years, Months, and Days
      const datePickerCalendarContainer =
        newCalendar.querySelector(CALENDAR_DATE_PICKER)

      datePickerCalendarContainer.insertAdjacentElement('beforeend', table)

      calendarEl.parentNode.replaceChild(newCalendar, calendarEl)

      datePickerEl.classList.add(DATE_PICKER_ACTIVE_CLASS)

      const statuses = []

      if (this.isSameDay(selectedDate, focusedDate)) {
        statuses.push('Selected date')
      }

      if (calendarWasHidden) {
        statuses.push(
          'You can navigate by day using left and right arrows',
          'Weeks by using up and down arrows',
          'Months by using page up and page down keys',
          'Years by using shift plus page up and shift plus page down',
          'Home and end keys navigate to the beginning and end of a week'
        )
        statusEl.textContent = ''
      } else {
        statuses.push(`${monthLabel} ${focusedYear}`)
      }
      statusEl.textContent = statuses.join('. ')

      return newCalendar
    }

    displayPreviousYear(_buttonEl) {
      if (_buttonEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(_buttonEl)
      let date = this.subYears(calendarDate, 1)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)

      let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_YEAR)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER)
      }
      nextToFocus.focus()
    }

    displayPreviousMonth(_buttonEl) {
      if (_buttonEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(_buttonEl)
      let date = this.subMonths(calendarDate, 1)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)

      let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_MONTH)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER)
      }
      nextToFocus.focus()
    }

    displayNextMonth(_buttonEl) {
      if (_buttonEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(_buttonEl)
      let date = this.addMonths(calendarDate, 1)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)

      let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_MONTH)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER)
      }
      nextToFocus.focus()
    }

    displayNextYear(_buttonEl) {
      if (_buttonEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(_buttonEl)
      let date = this.addYears(calendarDate, 1)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)

      let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_YEAR)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_DATE_PICKER)
      }
      nextToFocus.focus()
    }

    hideCalendar(el) {
      const { datePickerEl, calendarEl, statusEl } =
        this.getDatePickerContext(el)

      datePickerEl.classList.remove(DATE_PICKER_ACTIVE_CLASS)
      calendarEl.hidden = true
      statusEl.textContent = ''
    }

    selectDate(calendarDateEl) {
      if (calendarDateEl.disabled) return

      const { datePickerEl, externalInputEl } =
        this.getDatePickerContext(calendarDateEl)

      this.setCalendarValue(calendarDateEl, calendarDateEl.dataset.value)
      this.hideCalendar(datePickerEl)

      externalInputEl.focus()
    }

    toggleCalendar(el) {
      if (el.disabled) return
      const { calendarEl, inputDate, minDate, maxDate, defaultDate } =
        this.getDatePickerContext(el)

      if (calendarEl.hidden) {
        const dateToDisplay = this.keepDateBetweenMinAndMax(
          inputDate || defaultDate || this.today(),
          minDate,
          maxDate
        )
        const newCalendar = this.renderCalendar(calendarEl, dateToDisplay)
        newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus()
      } else {
        this.hideCalendar(el)
      }
    }

    displayMonthSelection(el, monthToDisplay) {
      const { calendarEl, statusEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(el)

      const selectedMonth = calendarDate.getMonth()
      const focusedMonth =
        monthToDisplay == null ? selectedMonth : monthToDisplay

      const months = MONTH_LABELS.map((month, index) => {
        const monthToCheck = this.setMonth(calendarDate, index)

        const isDisabled = this.isDatesMonthOutsideMinOrMax(
          monthToCheck,
          minDate,
          maxDate
        )

        let tabindex = '-1'

        const classes = [CALENDAR_MONTH_CLASS]
        const isSelected = index === selectedMonth

        if (index === focusedMonth) {
          tabindex = '0'
          classes.push(CALENDAR_MONTH_FOCUSED_CLASS)
        }

        if (isSelected) {
          classes.push(CALENDAR_MONTH_SELECTED_CLASS)
        }

        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('tabindex', tabindex)
        btn.setAttribute('class', classes.join(' '))
        btn.setAttribute('data-value', index)
        btn.setAttribute('data-label', month)
        btn.setAttribute('aria-selected', isSelected ? 'true' : 'false')
        if (isDisabled === true) {
          btn.disabled = true
        }
        btn.textContent = month

        return btn
      })

      const monthsHtml = document.createElement('div')
      monthsHtml.setAttribute('tabindex', '-1')
      monthsHtml.setAttribute('class', CALENDAR_MONTH_PICKER_CLASS)

      const table = document.createElement('table')
      table.setAttribute('class', CALENDAR_TABLE_CLASS)
      table.setAttribute('role', 'presentation')

      const monthsGrid = this.listToGridHtml(months, 3)
      const tableBody = this.createTableBody(monthsGrid)
      table.insertAdjacentElement('beforeend', tableBody)
      monthsHtml.insertAdjacentElement('beforeend', table)

      const newCalendar = calendarEl.cloneNode()
      newCalendar.insertAdjacentElement('beforeend', monthsHtml)
      calendarEl.parentNode.replaceChild(newCalendar, calendarEl)

      statusEl.textContent = 'Select a month.'

      return newCalendar
    }

    selectMonth(monthEl) {
      if (monthEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(monthEl)
      const selectedMonth = parseInt(monthEl.dataset.value, 10)
      let date = this.setMonth(calendarDate, selectedMonth)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)
      newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus()
    }

    displayYearSelection(el, yearToDisplay) {
      const { calendarEl, statusEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(el)

      const selectedYear = calendarDate.getFullYear()
      const focusedYear = yearToDisplay == null ? selectedYear : yearToDisplay

      let yearToChunk = focusedYear
      yearToChunk -= yearToChunk % YEAR_CHUNK
      yearToChunk = Math.max(0, yearToChunk)

      const prevYearChunkDisabled = this.isDatesYearOutsideMinOrMax(
        this.setYear(calendarDate, yearToChunk - 1),
        minDate,
        maxDate
      )

      const nextYearChunkDisabled = this.isDatesYearOutsideMinOrMax(
        this.setYear(calendarDate, yearToChunk + YEAR_CHUNK),
        minDate,
        maxDate
      )

      const years = []
      let yearIndex = yearToChunk
      while (years.length < YEAR_CHUNK) {
        const isDisabled = this.isDatesYearOutsideMinOrMax(
          this.setYear(calendarDate, yearIndex),
          minDate,
          maxDate
        )

        let tabindex = '-1'

        const classes = [CALENDAR_YEAR_CLASS]
        const isSelected = yearIndex === selectedYear

        if (yearIndex === focusedYear) {
          tabindex = '0'
          classes.push(CALENDAR_YEAR_FOCUSED_CLASS)
        }

        if (isSelected) {
          classes.push(CALENDAR_YEAR_SELECTED_CLASS)
        }

        const btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.setAttribute('tabindex', tabindex)
        btn.setAttribute('class', classes.join(' '))
        btn.setAttribute('data-value', yearIndex)
        btn.setAttribute('aria-selected', isSelected ? 'true' : 'false')
        if (isDisabled === true) {
          btn.disabled = true
        }
        btn.textContent = yearIndex

        years.push(btn)
        yearIndex += 1
      }

      const newCalendar = calendarEl.cloneNode()

      // create the years calendar wrapper
      const yearsCalendarWrapper = document.createElement('div')
      yearsCalendarWrapper.setAttribute('tabindex', '-1')
      yearsCalendarWrapper.setAttribute('class', CALENDAR_YEAR_PICKER_CLASS)

      // create table parent
      const yearsTableParent = document.createElement('table')
      yearsTableParent.setAttribute('role', 'presentation')
      yearsTableParent.setAttribute('class', CALENDAR_TABLE_CLASS)

      // create table body and table row
      const yearsHTMLTableBody = document.createElement('tbody')
      const yearsHTMLTableBodyRow = document.createElement('tr')

      // create previous button
      const previousYearsBtn = document.createElement('button')
      previousYearsBtn.setAttribute('type', 'button')
      previousYearsBtn.setAttribute('class', CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS)
      previousYearsBtn.setAttribute(
        'aria-label',
        `Navigate back ${YEAR_CHUNK} years`
      )
      if (prevYearChunkDisabled === true) {
        previousYearsBtn.disabled = true
      }
      previousYearsBtn.innerHTML = Sanitizer.escapeHTML`&nbsp`

      // create next button
      const nextYearsBtn = document.createElement('button')
      nextYearsBtn.setAttribute('type', 'button')
      nextYearsBtn.setAttribute('class', CALENDAR_NEXT_YEAR_CHUNK_CLASS)
      nextYearsBtn.setAttribute(
        'aria-label',
        `Navigate forward ${YEAR_CHUNK} years`
      )
      if (nextYearChunkDisabled === true) {
        nextYearsBtn.disabled = true
      }
      nextYearsBtn.innerHTML = Sanitizer.escapeHTML`&nbsp`

      // create the actual years table
      const yearsTable = document.createElement('table')
      yearsTable.setAttribute('class', CALENDAR_TABLE_CLASS)
      yearsTable.setAttribute('role', 'presentation')

      // create the years child table
      const yearsGrid = this.listToGridHtml(years, 3)
      const yearsTableBody = this.createTableBody(yearsGrid)

      // append the grid to the years child table
      yearsTable.insertAdjacentElement('beforeend', yearsTableBody)

      // create the prev button td and append the prev button
      const yearsHTMLTableBodyDetailPrev = document.createElement('td')
      yearsHTMLTableBodyDetailPrev.insertAdjacentElement(
        'beforeend',
        previousYearsBtn
      )

      // create the years td and append the years child table
      const yearsHTMLTableBodyYearsDetail = document.createElement('td')
      yearsHTMLTableBodyYearsDetail.setAttribute('colspan', '3')
      yearsHTMLTableBodyYearsDetail.insertAdjacentElement(
        'beforeend',
        yearsTable
      )

      // create the next button td and append the next button
      const yearsHTMLTableBodyDetailNext = document.createElement('td')
      yearsHTMLTableBodyDetailNext.insertAdjacentElement(
        'beforeend',
        nextYearsBtn
      )

      // append the three td to the years child table row
      yearsHTMLTableBodyRow.insertAdjacentElement(
        'beforeend',
        yearsHTMLTableBodyDetailPrev
      )
      yearsHTMLTableBodyRow.insertAdjacentElement(
        'beforeend',
        yearsHTMLTableBodyYearsDetail
      )
      yearsHTMLTableBodyRow.insertAdjacentElement(
        'beforeend',
        yearsHTMLTableBodyDetailNext
      )

      // append the table row to the years child table body
      yearsHTMLTableBody.insertAdjacentElement(
        'beforeend',
        yearsHTMLTableBodyRow
      )

      // append the years table body to the years parent table
      yearsTableParent.insertAdjacentElement('beforeend', yearsHTMLTableBody)

      // append the parent table to the calendar wrapper
      yearsCalendarWrapper.insertAdjacentElement('beforeend', yearsTableParent)

      // append the years calender to the new calendar
      newCalendar.insertAdjacentElement('beforeend', yearsCalendarWrapper)

      // replace calendar
      calendarEl.parentNode.replaceChild(newCalendar, calendarEl)

      statusEl.textContent = Sanitizer.escapeHTML`Showing years ${yearToChunk} to ${
        yearToChunk + YEAR_CHUNK - 1
      }. Select a year.`

      return newCalendar
    }

    displayPreviousYearChunk(el) {
      if (el.disabled) return

      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(el)
      const yearEl = calendarEl.querySelector(CALENDAR_YEAR_FOCUSED)
      const selectedYear = parseInt(yearEl.textContent, 10)

      let adjustedYear = selectedYear - YEAR_CHUNK
      adjustedYear = Math.max(0, adjustedYear)

      const date = this.setYear(calendarDate, adjustedYear)
      const cappedDate = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.displayYearSelection(
        calendarEl,
        cappedDate.getFullYear()
      )

      let nextToFocus = newCalendar.querySelector(CALENDAR_PREVIOUS_YEAR_CHUNK)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_YEAR_PICKER)
      }
      nextToFocus.focus()
    }

    displayNextYearChunk(el) {
      if (el.disabled) return

      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(el)
      const yearEl = calendarEl.querySelector(CALENDAR_YEAR_FOCUSED)
      const selectedYear = parseInt(yearEl.textContent, 10)

      let adjustedYear = selectedYear + YEAR_CHUNK
      adjustedYear = Math.max(0, adjustedYear)

      const date = this.setYear(calendarDate, adjustedYear)
      const cappedDate = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.displayYearSelection(
        calendarEl,
        cappedDate.getFullYear()
      )

      let nextToFocus = newCalendar.querySelector(CALENDAR_NEXT_YEAR_CHUNK)
      if (nextToFocus.disabled) {
        nextToFocus = newCalendar.querySelector(CALENDAR_YEAR_PICKER)
      }
      nextToFocus.focus()
    }

    selectYear(yearEl) {
      if (yearEl.disabled) return
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(yearEl)
      const selectedYear = parseInt(yearEl.innerHTML, 10)
      let date = this.setYear(calendarDate, selectedYear)
      date = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      const newCalendar = this.renderCalendar(calendarEl, date)
      newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus()
    }

    handleEscapeFromCalendar(event) {
      const { datePickerEl, externalInputEl } = this.getDatePickerContext(
        this.el
      )

      this.hideCalendar(datePickerEl)
      externalInputEl.focus()

      event.preventDefault()
    }

    updateCalendarIfVisible(el) {
      const { calendarEl, inputDate, minDate, maxDate } =
        this.getDatePickerContext(el)
      const calendarShown = !calendarEl.hidden

      if (calendarShown && inputDate) {
        const dateToDisplay = this.keepDateBetweenMinAndMax(
          inputDate,
          minDate,
          maxDate
        )
        this.renderCalendar(calendarEl, dateToDisplay)
      }
    }

    listToGridHtml(htmlArray, rowSize) {
      const grid = []
      let row = []

      let i = 0
      while (i < htmlArray.length) {
        row = []

        const tr = document.createElement('tr')
        while (i < htmlArray.length && row.length < rowSize) {
          const td = document.createElement('td')
          td.insertAdjacentElement('beforeend', htmlArray[i])
          row.push(td)
          i += 1
        }

        row.forEach((element) => {
          tr.insertAdjacentElement('beforeend', element)
        })

        grid.push(tr)
      }

      return grid
    }

    createTableBody = (grid) => {
      const tableBody = document.createElement('tbody')
      grid.forEach((element) => {
        tableBody.insertAdjacentElement('beforeend', element)
      })

      return tableBody
    }

    // EVENTS
    adjustCalendar = (adjustDateFn) => (event) => {
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(this.el)

      const date = adjustDateFn(calendarDate)

      const cappedDate = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      if (!this.isSameDay(calendarDate, cappedDate)) {
        const newCalendar = this.renderCalendar(calendarEl, cappedDate)
        newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus()
      }
      event.preventDefault()
    }

    handleUpFromDate = this.adjustCalendar((date) => this.subWeeks(date, 1))
    handleDownFromDate = this.adjustCalendar((date) => this.addWeeks(date, 1))
    handleLeftFromDate = this.adjustCalendar((date) => this.subDays(date, 1))
    handleRightFromDate = this.adjustCalendar((date) => this.addDays(date, 1))
    handleHomeFromDate = this.adjustCalendar((date) => this.startOfWeek(date))
    handleEndFromDate = this.adjustCalendar((date) => this.endOfWeek(date))
    handlePageDownFromDate = this.adjustCalendar((date) =>
      this.addMonths(date, 1)
    )
    handlePageUpFromDate = this.adjustCalendar((date) =>
      this.subMonths(date, 1)
    )
    handleShiftPageDownFromDate = this.adjustCalendar((date) =>
      this.addYears(date, 1)
    )
    handleShiftPageUpFromDate = this.adjustCalendar((date) =>
      this.subYears(date, 1)
    )
    handleMouseoverFromDate(dateEl) {
      if (dateEl.disabled) return

      const calendarEl = dateEl.closest(DATE_PICKER_CALENDAR)

      const currentCalendarDate = calendarEl.dataset.value
      const hoverDate = dateEl.dataset.value

      if (hoverDate === currentCalendarDate) return

      const dateToDisplay = this.parseDateString(hoverDate)
      const newCalendar = this.renderCalendar(calendarEl, dateToDisplay)
      newCalendar.querySelector(CALENDAR_DATE_FOCUSED).focus()
    }

    adjustMonthSelectionScreen = (adjustMonthFn) => (event) => {
      const monthEl = event.target
      const selectedMonth = parseInt(monthEl.dataset.value, 10)
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(monthEl)
      const currentDate = this.setMonth(calendarDate, selectedMonth)

      let adjustedMonth = adjustMonthFn(selectedMonth)
      adjustedMonth = Math.max(0, Math.min(11, adjustedMonth))

      const date = this.setMonth(calendarDate, adjustedMonth)
      const cappedDate = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      if (!this.isSameMonth(currentDate, cappedDate)) {
        const newCalendar = this.displayMonthSelection(
          calendarEl,
          cappedDate.getMonth()
        )
        newCalendar.querySelector(CALENDAR_MONTH_FOCUSED).focus()
      }
      event.preventDefault()
    }
    handleUpFromMonth = this.adjustMonthSelectionScreen((month) => month - 3)
    handleDownFromMonth = this.adjustMonthSelectionScreen((month) => month + 3)
    handleLeftFromMonth = this.adjustMonthSelectionScreen((month) => month - 1)
    handleRightFromMonth = this.adjustMonthSelectionScreen((month) => month + 1)
    handleHomeFromMonth = this.adjustMonthSelectionScreen(
      (month) => month - (month % 3)
    )
    handleEndFromMonth = this.adjustMonthSelectionScreen(
      (month) => month + 2 - (month % 3)
    )
    handlePageDownFromMonth = this.adjustMonthSelectionScreen(() => 11)
    handlePageUpFromMonth = this.adjustMonthSelectionScreen(() => 0)
    handleMouseoverFromMonth(monthEl) {
      if (monthEl.disabled) return
      if (monthEl.classList.contains(CALENDAR_MONTH_FOCUSED_CLASS)) return

      const focusMonth = parseInt(monthEl.dataset.value, 10)

      const newCalendar = this.displayMonthSelection(monthEl, focusMonth)
      newCalendar.querySelector(CALENDAR_MONTH_FOCUSED).focus()
    }

    adjustYearSelectionScreen = (adjustYearFn) => (event) => {
      const yearEl = event.target
      const selectedYear = parseInt(yearEl.dataset.value, 10)
      const { calendarEl, calendarDate, minDate, maxDate } =
        this.getDatePickerContext(yearEl)
      const currentDate = this.setYear(calendarDate, selectedYear)

      let adjustedYear = adjustYearFn(selectedYear)
      adjustedYear = Math.max(0, adjustedYear)

      const date = this.setYear(calendarDate, adjustedYear)
      const cappedDate = this.keepDateBetweenMinAndMax(date, minDate, maxDate)
      if (!this.isSameYear(currentDate, cappedDate)) {
        const newCalendar = this.displayYearSelection(
          calendarEl,
          cappedDate.getFullYear()
        )
        newCalendar.querySelector(CALENDAR_YEAR_FOCUSED).focus()
      }
      event.preventDefault()
    }
    handleUpFromYear = this.adjustYearSelectionScreen((year) => year - 3)
    handleDownFromYear = this.adjustYearSelectionScreen((year) => year + 3)
    handleLeftFromYear = this.adjustYearSelectionScreen((year) => year - 1)
    handleRightFromYear = this.adjustYearSelectionScreen((year) => year + 1)
    handleHomeFromYear = this.adjustYearSelectionScreen(
      (year) => year - (year % 3)
    )
    handleEndFromYear = this.adjustYearSelectionScreen(
      (year) => year + 2 - (year % 3)
    )
    handlePageUpFromYear = this.adjustYearSelectionScreen(
      (year) => year - YEAR_CHUNK
    )
    handlePageDownFromYear = this.adjustYearSelectionScreen(
      (year) => year + YEAR_CHUNK
    )
    handleMouseoverFromYear(yearEl) {
      if (yearEl.disabled) return
      if (yearEl.classList.contains(CALENDAR_YEAR_FOCUSED_CLASS)) return

      const focusYear = parseInt(yearEl.dataset.value, 10)

      const newCalendar = this.displayYearSelection(yearEl, focusYear)
      newCalendar.querySelector(CALENDAR_YEAR_FOCUSED).focus()
    }

    tabHandler(focusable) {
      const getFocusableContext = (el) => {
        const { calendarEl } = this.getDatePickerContext(el)
        const focusableElements = select(focusable, calendarEl)

        const firstTabIndex = 0
        const lastTabIndex = focusableElements.length - 1
        const firstTabStop = focusableElements[firstTabIndex]
        const lastTabStop = focusableElements[lastTabIndex]
        const focusIndex = focusableElements.indexOf(document.activeElement)

        const isLastTab = focusIndex === lastTabIndex
        const isFirstTab = focusIndex === firstTabIndex
        const isNotFound = focusIndex === -1

        return {
          focusableElements,
          isNotFound,
          firstTabStop,
          isFirstTab,
          lastTabStop,
          isLastTab
        }
      }

      return {
        tabAhead(event) {
          const { firstTabStop, isLastTab, isNotFound } = getFocusableContext(
            event.target
          )

          if (isLastTab || isNotFound) {
            event.preventDefault()
            firstTabStop.focus()
          }
        },
        tabBack(event) {
          const { lastTabStop, isFirstTab, isNotFound } = getFocusableContext(
            event.target
          )

          if (isFirstTab || isNotFound) {
            event.preventDefault()
            lastTabStop.focus()
          }
        }
      }
    }

    datePickerTabEventHandler = this.tabHandler(DATE_PICKER_FOCUSABLE)
    monthPickerTabEventHandler = this.tabHandler(MONTH_PICKER_FOCUSABLE)
    yearPickerTabEventHandler = this.tabHandler(YEAR_PICKER_FOCUSABLE)

    datePickerEvents(el) {
      const _this = this

      el.addEventListener('click', function (event) {
        if (event.target.classList.contains(DATE_PICKER_BUTTON_CLASS)) {
          _this.toggleCalendar(event.target)
        }

        if (event.target.classList.contains(CALENDAR_DATE_CLASS)) {
          _this.selectDate(event.target)
        }

        if (event.target.classList.contains(CALENDAR_MONTH_CLASS)) {
          _this.selectMonth(event.target)
        }

        if (event.target.classList.contains(CALENDAR_YEAR_CLASS)) {
          _this.selectYear(event.target)
        }

        if (event.target.classList.contains(CALENDAR_PREVIOUS_MONTH_CLASS)) {
          _this.displayPreviousMonth(event.target)
        }

        if (event.target.classList.contains(CALENDAR_NEXT_MONTH_CLASS)) {
          _this.displayNextMonth(event.target)
        }

        if (event.target.classList.contains(CALENDAR_PREVIOUS_YEAR_CLASS)) {
          _this.displayPreviousYear(event.target)
        }

        if (event.target.classList.contains(CALENDAR_NEXT_YEAR_CLASS)) {
          _this.displayNextYear(event.target)
        }

        if (
          event.target.classList.contains(CALENDAR_PREVIOUS_YEAR_CHUNK_CLASS)
        ) {
          _this.displayPreviousYearChunk(event.target)
        }

        if (event.target.classList.contains(CALENDAR_NEXT_YEAR_CHUNK_CLASS)) {
          _this.displayNextYearChunk(el.target)
        }

        if (event.target.classList.contains(CALENDAR_MONTH_SELECTION_CLASS)) {
          const newCalendar = _this.displayMonthSelection(el)
          newCalendar.querySelector(CALENDAR_MONTH_FOCUSED).focus()
        }

        if (event.target.classList.contains(CALENDAR_YEAR_SELECTION_CLASS)) {
          const newCalendar = _this.displayYearSelection(el)
          newCalendar.querySelector(CALENDAR_YEAR_FOCUSED).focus()
        }
      })

      el.addEventListener('keyup', function (event) {
        if (event.target.classList.contains(DATE_PICKER_CALENDAR_CLASS)) {
          const keydown = el.dataset.keydownKeyCode
          if (`${event.keyCode}` !== keydown) {
            event.preventDefault()
          }
        }
      })

      el.addEventListener('keydown', function (event) {
        if (event.target.classList.contains(DATE_PICKER_EXTERNAL_INPUT_CLASS)) {
          event.target.dataset.keydownKeyCode = event.keyCode

          // if (event.key === 'Enter') {
          //     _this.validateDateInput(el);
          // }
        }

        if (event.target.classList.contains(CALENDAR_DATE_CLASS)) {
          switch (event.key) {
            case 'Up':
            case 'ArrowUp':
              _this.handleUpFromDate(event)
              break
            case 'Down':
            case 'ArrowDown':
              _this.handleDownFromDate(event)
              break
            case 'Left':
            case 'ArrowLeft':
              _this.handleLeftFromDate(event)
              break
            case 'Right':
            case 'ArrowRight':
              _this.handleRightFromDate(event)
              break
            case 'Home':
              _this.handleHomeFromDate(event)
              break
            case 'End':
              _this.handleEndFromDate(event)
              break
            case 'PageDown':
              _this.handlePageDownFromDate(event)
              break
            case 'PageUp':
              _this.handlePageUpFromDate(event)
              break
            case 'Shift+PageDown':
              _this.handleShiftPageDownFromDate(event)
              break
            case 'Shift+PageUp':
              _this.handleShiftPageUpFromDate(event)
              break
            case 'Tab':
              _this.datePickerTabEventHandler.tabAhead(event)
              break
            case 'Escape':
              _this.handleEscapeFromCalendar(event)
              break
          }
        }

        if (event.target.classList.contains(CALENDAR_DATE_PICKER_CLASS)) {
          switch (event.key) {
            case 'Tab':
              _this.datePickerTabEventHandler.tabAhead(event)
              break
            case 'Shift+Tab':
              _this.datePickerTabEventHandler.tabBack(event)
              break
          }
        }

        if (event.target.classList.contains(CALENDAR_MONTH_CLASS)) {
          switch (event.key) {
            case 'Up':
            case 'ArrowUp':
              _this.handleUpFromMonth(event)
              break
            case 'Down':
            case 'ArrowDown':
              _this.handleDownFromMonth(event)
              break
            case 'Left':
            case 'ArrowLeft':
              _this.handleLeftFromMonth(event)
              break
            case 'Right':
            case 'ArrowRight':
              _this.handleRightFromMonth(event)
              break
            case 'Home':
              _this.handleHomeFromMonth(event)
              break
            case 'End':
              _this.handleEndFromMonth(event)
              break
            case 'PageDown':
              _this.handlePageDownFromMonth(event)
              break
            case 'PageUp':
              _this.handlePageUpFromMonth(event)
              break
            case 'Shift+Tab':
            case 'Tab':
              event.preventDefault()
              break
          }
        }

        if (event.target.classList.contains(CALENDAR_MONTH_PICKER_CLASS)) {
          switch (event.key) {
            case 'Tab':
              _this.monthPickerTabEventHandler.tabAhead(event)
              break
            case 'Shift+Tab':
              _this.monthPickerTabEventHandler.tabBack(event)
              break
          }
        }

        if (event.target.classList.contains(CALENDAR_YEAR_CLASS)) {
          switch (event.key) {
            case 'Up':
            case 'ArrowUp':
              _this.handleUpFromYear(event)
              break
            case 'Down':
            case 'ArrowDown':
              _this.handleDownFromYear(event)
              break
            case 'Left':
            case 'ArrowLeft':
              _this.handleLeftFromYear(event)
              break
            case 'Right':
            case 'ArrowRight':
              _this.handleRightFromYear(event)
              break
            case 'Home':
              _this.handleHomeFromYear(event)
              break
            case 'End':
              _this.handleEndFromYear(event)
              break
            case 'PageDown':
              _this.handlePageDownFromYear(event)
              break
            case 'PageUp':
              _this.handlePageUpFromYear(event)
              break
            case 'Shift+Tab':
            case 'Tab':
              event.preventDefault()
              break
          }
        }

        if (event.target.classList.contains(DATE_PICKER_CLASS)) {
          if (event.key === 'Escape') {
            _this.handleEscapeFromCalendar(event)
          }
        }
      })

      el.addEventListener('focusout', function (event) {
        // if(event.target.classList.contains(DATE_PICKER_EXTERNAL_INPUT_CLASS)) {
        //     _this.validateDateInput(el);
        // }

        if (!el.contains(event.relatedTarget)) {
          _this.hideCalendar(el)
        }
      })

      el.addEventListener('input', function (event) {
        if (event.target.classList.contains(DATE_PICKER_EXTERNAL_INPUT_CLASS)) {
          _this.reconcileInputValues(el)
          _this.updateCalendarIfVisible(el)
        }
      })

      if (!isIosDevice()) {
        el.addEventListener('mouseover', function (event) {
          if (event.target.classList.contains(CALENDAR_DATE_CURRENT_MONTH)) {
            _this.handleMouseoverFromDate(el)
          }

          if (event.target.classList.contains(CALENDAR_MONTH)) {
            _this.handleMouseoverFromMonth(el)
          }

          if (event.target.classList.contains(CALENDAR_YEAR)) {
            _this.handleMouseoverFromYear(el)
          }
        })
      }
    }
  }

  DatePicker.init(SELECTOR$4) /*
Constants 
*/
  const EVENT_HANDLER$1 = 'click'
  const SELECTOR$3 = '.govcy-header'

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
        this.source.globalSearch.addEventListener(EVENT_HANDLER$1, (e) => {
          e.preventDefault()
          this._toggle(this.source.globalSearch, this.destination.globalSearch)
        })
      }

      if (this.source.mobileMenu) {
        this.source.mobileMenu.addEventListener(EVENT_HANDLER$1, (e) => {
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
        const mobileOnly = this.header.querySelectorAll(
          '.govcy-mobile-menu-only'
        )

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

  HeaderMenu.init(SELECTOR$3) /*
Constants 
*/

  const SELECTOR$2 = 'input[autocomplete="one-time-code"]'
  const OTP_CREDENTIAL = 'OTPCredential'

  /**
   * Class definition
   */
  class MobileOTP extends Component {
    constructor(element) {
      super()

      if (!element) {
        return
      }
      const ac = new AbortController()
      const form = element.closest('form')
      if (form) {
        form.addEventListener('submit', () => {
          // Cancel the WebOTP API.
          ac.abort()
        })
      }
      // Invoke the WebOTP API
      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal
        })
        .then((otp) => {
          element.value = otp.code
          // Automatically submit the form when an OTP is obtained.
          if (form) form.submit()
        })
        .catch((err) => {
          console.log(err)
        })

      console.log('Mobile OTP Loaded')
    }
  }

  if (OTP_CREDENTIAL in window) {
    MobileOTP.init(SELECTOR$2)
  } /*
Constants 
*/

  const EVENT_HANDLER = 'click'
  const CLASS_ACTIVE = 'active'
  const CLASS_SHOW = 'show'
  const SELECTOR$1 = '.govcy-tab-link'

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
        if (
          element.getAttribute('id') == this.targetElement.getAttribute('id')
        ) {
          element.classList.add(CLASS_ACTIVE)
          element.classList.add(CLASS_SHOW)
        } else {
          element.classList.remove(CLASS_ACTIVE)
          element.classList.remove(CLASS_SHOW)
        }
      })
    }
  }

  Tab.init(SELECTOR$1) // Import Component class

  const SELECTOR = '.govcy-radio-input'

  /**
   * ConditionalContactToggler Class
   */
  class ConditionalContactToggler extends Component {
    constructor() {
      super()

      // Initialize by adding event listeners to radio inputs
      this.radioInputs = document.querySelectorAll('.govcy-radio-input')
      this.radioInputs.forEach((input) => {
        input.addEventListener('change', this.handleInputChange.bind(this))
      })
    }

    toggleConditionalContact(conditionalId) {
      // Hide all conditional contact options except the selected one
      const conditionalContacts = document.querySelectorAll(
        '.govcy-radio__conditional'
      )
      conditionalContacts.forEach((conditional) => {
        if (conditional.id !== conditionalId) {
          conditional.classList.add('govcy-radio__conditional--hidden')
        } else {
          conditional.classList.remove('govcy-radio__conditional--hidden')
        }
      })
    }

    handleInputChange(event) {
      const conditionalId = event.target.getAttribute('data-aria-controls')
      this.toggleConditionalContact(conditionalId)
    }
  }

  // Initialize ConditionalContactToggler using Component
  ConditionalContactToggler.init(SELECTOR)
  exports.Accordion = Accordion
  exports.CharacterCount = CharacterCount
  exports.Collapsable = Collapsable
  exports.ConditionalContactToggler = ConditionalContactToggler
  exports.DatePicker = DatePicker
  exports.HeaderMenu = HeaderMenu
  exports.MobileOTP = MobileOTP
  exports.Tab = Tab
  return exports
})({})
