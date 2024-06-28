const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('Server-side rendering is happening!')
  res.render('layout', { view: '../views/home/index' })
})

module.exports = router
