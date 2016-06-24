import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import morgan from 'morgan'
import { ENV } from './appConfig'

export default (app) => {
  // view engine config
  app.set('views', path.join(__dirname, ( ENV === 'development' ? '../../..' : '../..'), 'views'))
  app.set('view engine', 'jade')

  app.set('port', (process.env.PORT || 3000))

  // it can removed safely
  app.disabled('x-powered-by')

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

  // for browsers not suppert PUT and DELETE
  app.use(methodOverride())

  app.use(express.static(path.join(__dirname, (ENV === 'development' ? '../../..' : '../..'), 'public')));

  // HTTP request logger
  app.use(morgan('dev'))

  console.log('------------------------')
  console.log(`Listening on port: ${app.get('port')}`)
  console.log('------------------------')
}
