import Component from './component.js'

/*
Constants 
*/

const SELECTOR = 'input[autocomplete="one-time-code"]'
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
  MobileOTP.init(SELECTOR)
}

export default MobileOTP
