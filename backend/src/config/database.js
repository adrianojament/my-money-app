const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite que o minimo do '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite que o maximo do '{MAX}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o '{PATH}'"

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })
