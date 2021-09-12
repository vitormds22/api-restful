const express = require('express')
const app = express()
const data = require('./data.json')

app.use(express.json())

// Por padrão é utilizado
// req => Requisição
// res => Response
// https://jsonplaceholder.typicode.com/users

app.get('/clients', function(req, res){
    res.json(data)
});

// Para adiquirir apenas um cliente
app.get('/clients/:id', function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id = id)

    if(!client) return res.status(204).json()

    res.json(client)
});

app.post('/clients', function(req, res){
    
});

// Para adiquirir apenas um cliente
app.put('/clients/:id', function(req, res){

});

// Para adiquirir apenas um cliente
;app.delete('/clients/:id', function(req, res){

});

app.listen(3000, function(){
    console.log('Server is running')
})