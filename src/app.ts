import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import morgan from 'morgan'

const app = express()

app.use(helmet)
app.use(compression())
app.use(morgan('combined'))
app.use(express.json())


export default app