import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const PORT = 5000

const connectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("conectad ao mongoDB")
    } catch (error) {
        console.log(error)
    }
}

connectarDB()

app.listen(PORT, () => {
    console.log(`api rodanddo na porta ${PORT}`)
})
