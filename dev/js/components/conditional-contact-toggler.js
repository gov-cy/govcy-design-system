// Import Component class
import Component from './component.js'

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

// Export ConditionalContactToggler
export default ConditionalContactToggler
