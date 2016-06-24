import express from 'express'
import expressConfig from './config/express'
const app = express()

/*
 * Bootstrap application settings
 */
expressConfig(app)

app.get('*', (req, res) => {
  res.send('Hello, World')
})

app.listen(app.get('port'))
