// govcy-OTP
const govcyMobileOtp = () => {
  // Feature detection
  if ('OTPCredential' in window) {
    window.addEventListener('DOMContentLoaded', e => {
      const input = document.querySelector('input[autocomplete="one-time-code"]');
      if (!input) return;
      // Cancel the WebOTP API if the form is submitted manually.
      const ac = new AbortController();
      const form = input.closest('form');
      if (form) {
        form.addEventListener('submit', e => {
          // Cancel the WebOTP API.
          ac.abort();
        });
      }
      // Invoke the WebOTP API
      navigator.credentials.get({
        otp: { transport:['sms'] },
        signal: ac.signal
      }).then(otp => {
        input.value = otp.code;
        // Automatically submit the form when an OTP is obtained.
        if (form) form.submit();
      }).catch(err => {
        console.log(err);
      });
    });
  }
  console.log('govcyMobileOtp() has loaded.');
};

