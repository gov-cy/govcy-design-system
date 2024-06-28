const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('layout', { view: '../views/components/home' })
})
// set sub routes for components
router.get('/accordion', (req, res) => {
  res.render('layout', { view: 'components/accordion' })
})
router.get('/backLink', (req, res) => {
  res.render('layout', { view: 'components/backLink' })
})
router.get('/breadCrumbs', (req, res) => {
  res.render('layout', { view: 'components/breadCrumbs' })
})
router.get('/button', (req, res) => {
  res.render('layout', { view: 'components/button' })
})
router.get('/characterCount', (req, res) => {
  res.render('layout', { view: 'components/characterCount' })
})
router.get('/checkboxes', (req, res) => {
  res.render('layout', { view: 'components/checkboxes' })
})
router.get('/cookieBanner', (req, res) => {
  res.render('layout', { view: 'components/cookieBanner' })
})
router.get('/dataTables', (req, res) => {
  res.render('layout', { view: 'components/dataTables' })
})
router.get('/dateInputs', (req, res) => {
  res.render('layout', { view: 'components/dateInputs' })
})
router.get('/datePicker', (req, res) => {
  res.render('layout', { view: 'components/datePicker' })
})
router.get('/details', (req, res) => {
  res.render('layout', { view: 'components/details' })
})
router.get('/errorMessages', (req, res) => {
  res.render('layout', { view: 'components/errorMessages' })
})
router.get('/errorSummary', (req, res) => {
  res.render('layout', { view: 'components/errorSummary' })
})
router.get('/fieldSet', (req, res) => {
  res.render('layout', { view: 'components/fieldSet' })
})
router.get('/fileUpload', (req, res) => {
  res.render('layout', { view: 'components/fileUpload' })
})
router.get('/header', (req, res) => {
  res.render('layout', { view: 'components/header' })
})
router.get('/insertText', (req, res) => {
  res.render('layout', { view: 'components/insertText' })
})
router.get('/panel', (req, res) => {
  res.render('layout', { view: 'components/panel' })
})
router.get('/phaseBanner', (req, res) => {
  res.render('layout', { view: 'components/phaseBanner' })
})
router.get('/radios', (req, res) => {
  res.render('layout', { view: 'components/radios' })
})
router.get('/select', (req, res) => {
  res.render('layout', { view: 'components/select' })
})
router.get('/summary', (req, res) => {
  res.render('layout', { view: 'components/summary' })
})
router.get('/table', (req, res) => {
  res.render('layout', { view: 'components/table' })
})
router.get('/tabs', (req, res) => {
  res.render('layout', { view: 'components/tabs' })
})
router.get('/tagColors', (req, res) => {
  res.render('layout', { view: 'components/tagColors' })
})
router.get('/textbox', (req, res) => {
  res.render('layout', { view: 'components/textbox' })
})
router.get('/textArea', (req, res) => {
  res.render('layout', { view: 'components/textArea' })
})
module.exports = router
