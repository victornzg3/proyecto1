'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express ()
const port=process.env.PORT || 9005

app.use(bodyParser.urlencoded({ extend:false}))
app.use(bodyParser.json())

app.listen(port,() => {

    console.log(`API REST en http://localhost:${port}`)

    
})
