const express = require('express')
const app = express()
const path = require('path')

// Set EJS as the view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')))

// Use routes
app.use('/', require('./routes/home/index'))
app.use('/styles', require('./routes/styles/styles'))
app.use('/components', require('./routes/components/components'))
app.use('/patterns', require('./routes/patterns/patterns'))
app.use('/accessibility', require('./routes/accessibility/accessibility'))

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

server.on('error', (err) => {
  console.error('Server error:', err)
  process.exit(1)
})
