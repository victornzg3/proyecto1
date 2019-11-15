'use strict'
const servicios = require ('../servicios')

function isAuth (req, res, next) {
    if (!req.headers.authorization) {
      return res.status(403).send({ message: 'No tienes autorización' })
    }
  
    const token = req.headers.authorization.split(' ')[1]

servicios.decoreToken(token)
.then (responde => {
req.user = response
next()
})

.catch(response =>{
req.status(response.status)


} )
}
module.exports = isAuth