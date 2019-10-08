'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = Schema
({
idticket:Number,
nombreticket:String,
description:String,
idusuario:Number,

})

module.exports = mongoose.model('ticket',TicketSchema)


      