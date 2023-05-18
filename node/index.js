const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const People = require("./models/People")

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


app.get('/', (req, res) => {
    const numero = parseInt(Math.random() * 1000)
    const nomePe = "Pessoa "+numero;
    People.create({
        nome: nomePe
    }).then(function(){
        console.log(nomePe+' cadastrada com sucesso! ')
    }).catch(function(erro){
        console.log("ERRO -> "+erro)
    })

    People.findAll().then(function(peoples){
        console.log(peoples)
        res.render('home', {pessoas: peoples})
    })
})

app.listen(port, ()=> {
    console.log('rodando na porta '+port)
})