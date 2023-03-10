const express = require('express')
const router = express.Router();

router.get('/putrecetas',(req, res)=>{
   
    res.send('soy el que devuelve todas las respuesta')
})

module.exports = router;