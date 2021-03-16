const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { conectaBanco, insereUsuario } = require('./conexaoBanco')

app.listen(3001, () => {
    console.log('Backend executando')
})

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res) => {
    conectaBanco()
    insereUsuario(req.body.usuario, req.body.senha)
    res.send(req.body)
})