const mongoose = require ('mongoose');

const gameSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: [true,"Este campo é obrigatorio"],
            minlength: [2, "Titulo muito curto"],
            maxlength: [100, "Titulo muito longo"],
        },
        genero: {
            type: String,
            required: [true,"Este campo é obrigatorio"],
            minlength: [2, "Gênero muito curo"],
            maxlength: [100, "Gênero muito longo"],
        },
        plataforma: {
            type: String, 
            required: [true, "Este campo é obrigatorio"],
            minlength: [1, "Nome da plataforma muito curta"],
            maxlength: [100,"Nome da plataforma muito longo"],
        },
        lancamento: {
            type: Number,
            required: [true,"Este campo é obrigatorio"],
            min: [1950,"Ano de lançamento muito curto"],
            max: [2025,"Ano de lançamento muito longo"],
        },
        createdAt: {
            type: Date,
             default: Date.now
        }
    },
    { versionKey: false}
);

const Games  = mongoose.model("Games", gameSchema);
module.exports = Games;