import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'
import route from './routes'

const app = express()

app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(express.json())

app.use(route)

export default app