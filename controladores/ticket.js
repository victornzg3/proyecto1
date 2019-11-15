'use strict'
const Ticket = require('../modelos/ticket')

function getTicket(req, res) {
    let idticket= req.params.idticket
    Ticket.findById(idticket,(err,ticket) => {
        if(err) return res.status(500).send
        ({ message:`Error al realizar la peticion:${err}` })
        if(!ticket) return res.status(404).send
        ({message:`No existe el ticket`})
       res.status(200).send({ticket})
     })
}

function getTickets(req, res) {
    Ticket.find({},(err,tickets) => {
        if(err) return res.status(500).send({ message:`Error al realizar la peticion:${err}` })
        if(!tickets) return res.status(404).send({message:`No existe el ticket`})
        res.status(200).send({ tickets })
             })
}

function saveTicket (req, res) {

console.log('POST /ticket')
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
}


function updateTicket(req , res){
    let idticket= req.params.idticket
    let update = req.body
    Ticket.findByIdAndUpdate(idticket,update,(err,ticketUpdated) =>{
     if(err) return res.status(500).send({message:`Error al actualizar el ticket:${err}`})
        res.send(200, {ticket: ticketUpdated})
    })


}

function deleteTicket(req , res) {
    let idticket= req.params.idticket
    Ticket.findById(idticket,(err,ticket) => {
       if(err) return res.status(500).send ({message:`Error al borrar el ticket:${err}`})
   
       ticket.remove(err => {
           if(err) return res.status(500).send ({message:`Error al borrar el ticket:${err}`})
           res.status(200).send({message:'El ticket fue eliminado'})
        })
   })
}

module.exports = {
getTicket,
getTickets,
updateTicket,
deleteTicket,
saveTicket
}