const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('layout', { view: '../views/styles/home' })
})

// Sub-routes for specific style content
router.get('/colors', (req, res) => {
  res.render('layout', { view: 'styles/colors' })
})

router.get('/pageTemplates', (req, res) => {
  res.render('layout', { view: 'styles/pageTemplates' })
})

router.get('/gridSystem', (req, res) => {
  res.render('layout', { view: 'styles/gridSystem' })
})

router.get('/verticalSpacing', (req, res) => {
  res.render('layout', { view: 'styles/verticalSpacing' })
})

router.get('/layouts', (req, res) => {
  res.render('layout', { view: 'styles/layouts' })
})

router.get('/typography', (req, res) => {
  res.render('layout', { view: 'styles/typography' })
})

module.exports = router
