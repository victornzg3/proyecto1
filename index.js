'use strict'
const mongoose = require('mongoose')
const router = require('./app')
const config = require('./config')
mongoose.connect(config.db, (err, res) => {
      if (err) throw err
console.log('La conexion a MongoDB se ha realizado correctamente!!')
      
router.listen(config.port,() => {
    console.log(`API REST en http://localhost:${config.port}`)
})
})