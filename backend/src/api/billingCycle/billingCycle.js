const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema ({
    name: {type: String, required: [true,'Informe a descrição do Credito']},
    value: {type: Number, min: 0, required: [true,'Informe o valor do Credito']}
})

const debtSchema = new mongoose.Schema ({
    name: {type: String, required: [true,'Informe a descrição da conta']},
    value: {type: Number, min: 0, required: [true,'Informe o valor do Debito']},
    status: {type: String, required:false, uppercase:true, enum:['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCyleSchema = new mongoose.Schema ({
    name: {type: String, required: [true,'Informe a descrição do Ciclo']},
    month: {type: Number, min: 1, max: 12, required: [true,'Informe o mês entre 1 e 12']},
    year:  {type: Number, min: 1970, max: 2100, required: [true,'Informe o ano entre 1970 e 2100']},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCyle', billingCyleSchema)