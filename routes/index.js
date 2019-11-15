'use strict'
const express = require('express')
const controladores = require ('../controladores/ticket')
const controladorUser = require ('../controladores/user')
const auth = require('../middlewares/auth')
const hbs = require('express-handlebars')


const api = express.Router()


api.get('/ticket/:idticket',controladores.getTicket) 
api.get('/tickets', controladores.getTickets) 
api.delete('/ticket/:idticket', controladores.deleteTicket)
api.post('/ticket', controladores.saveTicket)
api.put('/ticket/:idticket', controladores.updateTicket)
api.post('/signup',controladorUser.signUp)
api.post('/signin',controladorUser.singIN)
api.get('/private',auth,(req,res) => {

    res.status(200).send({ message:'Tienes acceso'})
    })

module.exports = api

