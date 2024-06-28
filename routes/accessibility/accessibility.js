const express = require('express')
const router = express.Router()
const abc = 70

router.get('/', (req, res) => {
  res.render('layout', { view: '../views/accessibility/accessibility' })
})

module.exports = router
