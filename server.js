const express = require('express')
const app = express()

// Por padrão é utilizado
// req => Requisição
// res => Response

app.get('/clients', function(req, res){

});

// Para adiquirir apenas um cliente
app.get('/clients/:id', function(req, res){

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