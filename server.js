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
    const {name, email} = req.body

    // Salvar

    res.json({name, email})
});

// Para adiquirir apenas um cliente
app.put('/clients/:id', function(req, res){
    const { id } = req.params
    const client = data.find(cli => cli.id = id)
    const {name} = req.body

    if(!client) return res.status(204).json()

    client.name = name
    res.json(client)

});

// Para adiquirir apenas um cliente
app.delete('/clients/:id', function(req, res){
    const { id } = req.params
    const clientsFiltered = data.filter(client => client.id != id)

    res.json(clientsFiltered)
});

app.listen(3000, function(){
    console.log('Server is running')
})