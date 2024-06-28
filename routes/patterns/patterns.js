const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('layout', { view: '../views/patterns/home' })
})
// set sub routes for components
router.get('/components1', (req, res) => {
  res.render('layout-container', { view: 'patterns/components1' })
})
router.get('/components2', (req, res) => {
  res.render('layout-container', { view: 'patterns/components2' })
})
router.get('/components3', (req, res) => {
  res.render('layout-container', { view: 'patterns/components3' })
})
router.get('/patterns_all', (req, res) => {
  res.render('layout-container', { view: 'patterns/patterns_all' })
})
router.get('/layouts', (req, res) => {
  res.render('layout-container', { view: 'patterns/layouts' })
})
router.get('/footers', (req, res) => {
  res.render('layout-clean', { view: 'patterns/footers' })
})
router.get('/headers', (req, res) => {
  res.render('layout-clean', { view: 'patterns/headers' })
})
router.get('/currencyAmount', (req, res) => {
  res.render('layout', { view: 'patterns/currencyAmount' })
})
router.get('/dates', (req, res) => {
  res.render('layout', { view: 'patterns/dates' })
})
router.get('/email', (req, res) => {
  res.render('layout', { view: 'patterns/email' })
})
router.get('/names', (req, res) => {
  res.render('layout', { view: 'patterns/names' })
})
router.get('/telephone', (req, res) => {
  res.render('layout', { view: 'patterns/telephone' })
})
router.get('/checkAnswer', (req, res) => {
  res.render('layout', { view: 'patterns/checkAnswer' })
})
router.get('/confirmPhoneNumber', (req, res) => {
  res.render('layout', { view: 'patterns/confirmPhoneNumber' })
})
router.get('/hintText', (req, res) => {
  res.render('layout', { view: 'patterns/hintText' })
})
router.get('/pageNotFoundPages', (req, res) => {
  res.render('layout', { view: 'patterns/pageNotFoundPages' })
})
router.get('/questionPages', (req, res) => {
  res.render('layout', { view: 'patterns/questionPages' })
})
router.get('/serviceUnavailiablePages', (req, res) => {
  res.render('layout', { view: 'patterns/serviceUnavailiablePages' })
})
router.get('/thereIsAProblem', (req, res) => {
  res.render('layout', { view: 'patterns/thereIsAProblem' })
})
router.get('/focusState', (req, res) => {
  res.render('layout', { view: 'patterns/focusState' })
})
router.get('/labelsAndLegendHeadings', (req, res) => {
  res.render('layout', { view: 'patterns/labelsAndLegendHeadings' })
})
router.get('/multibleThings', (req, res) => {
  res.render('layout', { view: 'patterns/multibleThings' })
})
router.get('/serviceStructure', (req, res) => {
  res.render('layout', { view: 'patterns/serviceStructure' })
})
module.exports = router
