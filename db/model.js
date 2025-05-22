import mongoose from "mongoose";

const pessoasM = new mongoose.Schema({
    idade: Number,
    sexo: String,
    nome: String,
})

export default mongoose.model("pessoas", pessoasM)