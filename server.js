const express = require('express')
const app = express()

//6) Resource
// Constraint muito importante para o REST

app.get('/clients')

// Para adiquirir apenas um cliente
app.get('/clients/:id')

app.post('/clients')

// Para adiquirir apenas um cliente
app.put('/clients/:id')

// Para adiquirir apenas um cliente
app.delete('/clients/:id')

app.listen(3000, function(){
    console.log('Server is running')
})