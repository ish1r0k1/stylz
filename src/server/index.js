import express from 'express'
import expressConfig from './config/express'
const app = express()

/*
 * Bootstrap application settings
 */
expressConfig(app)

app.get('*', (req, res) => {
  res.render('index', {
    title: 'stylz'
  })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

app.listen(app.get('port'))
