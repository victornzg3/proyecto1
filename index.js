'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Ticket = require('./modelos/ticket')
const app = express ()
const port=process.env.PORT || 9001

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())


app.get('/api/ticket/:idticket',(req,res) => {
let idticket= req.params.idticket
 Ticket.findById(idticket,(err,ticket) => {
     if(err) return res.status(500).send
     
     ({
         message:`Error al realizar la peticion:${err}`
     })

     if(!ticket) return res.status(404).send
     
     ({
         message:`No existe el ticket`
     })

     res.status(200).send  ({
        ticket
    })
  
}) 
}) 
app.delete('/api/ticket/:idticket',(req,res) => {
    let idticket= req.params.idticket
 Ticket.findById(idticket,(err,ticket) => {
    if(err) return res.status(500).send
      ({ message:`Error al borrar el ticket:${err}` })

    ticket.remove(err => {
        if(err) return res.status(500).send
       ({message:`Error al borrar el ticket:${err}` })
        res.status(200).send({
            message:'El ticket fue eliminado'
        })
    })
})

})
  
app.post('/api/ticket/',(req,res) => {
console.log('POST /api/ticket')
console.log(req.body)
let ticket = new Ticket()
ticket.idticket= req.body.idticket
ticket.nombreticket = req.body.nombreticket
ticket.description= req.body.description
ticket.idusuario= req.body.idusuario
ticket.save((err,ticketStored) =>{
if (err) res.status(500).send({message:`error al grabar:{$err}`})

res.status(200).send({ticket: ticketStored})

})

})
app.put('/api/ticket/:idticket',(req,res) => {
    let idticket= req.params.idticket
    let update = req.body
    Ticket.findByIdAndUpdate(idticket,update,(err,ticketUpdated) =>{

        if(err) return res.status(500).send
      ({ message:`Error al actualizaar el ticket:${err}` })

        res.send(200, {ticket: ticketUpdated})
    })
})



mongoose.connect('mongodb://localhost:27017/DataBase', (err, res) => {
        if (err) throw err
console.log('La conexion a MongoDB se ha realizado correctamente!!')
      
app.listen(port,() => {

    console.log(`API REST en http://localhost:${port}`)

    
})
})