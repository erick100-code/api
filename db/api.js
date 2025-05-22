import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import model from './model.js'

dotenv.config()


const app = express()
const PORT = 5000

app.use(express.json())// TRANFORMA TODAS AS REQUISIÇÕES DA API EM JSON

const connectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("conectad ao mongoDB")
    } catch (error) {
        console.log(error)
    }
}

connectarDB()

// CRUD

// CRATE

app.post('/ident', async (req, res) => {
    try {
        const novoIDent = await model.create(req.body)
        res.json(novoIDent)
    } catch (error) {
        res.json({error: error});
    }
})

// RED

app.get('/ident', async (req, res) => {
    try {
        const lerIDent = await model.find()
        res.json(lerIDent)
    } catch (error) {
        res.json({error: error})
    }

})

// UPDATE

app.put('/ident/:id', async (req, res) => {
   
    try {
        const alterar = await model.findByIdAndUpdate(
            req.params.id, // ONDE PROCURAR
            req.body,// O QUE ALTERAR
            {new: true} // PARA MOSTRAR O NOVO VALOR    
        ) 
        res.json(alterar)
    } catch (error) {
        res.json({error: error})
    }
})

app.delete('/ident/:id', async (req, res) => {
    try {
        const deletar = await model.findByIdAndDelete(
            req.params.id
        )
        res.json(deletar)
    } catch (error) {
        res.json({error: error})
    }
})

app.listen(PORT, () => {
    console.log(`api rodanddo na porta ${PORT}`)
})