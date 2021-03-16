function conectaBanco() {
    const mysql = require('mysql')

    this.conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "103190",
        database: "sistemalogin"
    })

    this.conexao.connect(function(erro){
        if (erro) throw erro
        console.log('Banco de dados MySQL conectado !')
    })
}

function insereUsuario(nome, senha) {
    this.conexao.query('INSERT INTO user(nome, senha) VALUES (?, ?)', [nome, senha], (erro, resultado) => {
        if (erro) throw erro
        console.log(resultado)
    })
}

function deletaUsuario(id) {

}

module.exports = {conectaBanco, insereUsuario}