import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import ordersRouter from './routes/orders.js'
const app = express()
app.use(cors())
dotenv.config()

// mongoose.connect(process.env.DATABASE_URL)
// .then(() => {
//     console.log('Connected to Database')
// }).catch((error) => {
//     console.log('something is wrong', error)
// })

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to the Database'))

app.use(express.json())
app.use('/orders', ordersRouter)

app.listen(process.env.PORT || 3001, (req, res) => console.log('server started'))