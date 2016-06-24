import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('combined'))

app.set('port', (process.env.PORT || 3000))

app.get('*', (req, res) => {
  res.send('Hello, World')
})

app.listen(app.get('port'));
