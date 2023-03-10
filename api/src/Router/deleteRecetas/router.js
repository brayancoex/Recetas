const express = require('express')
const router = express.Router();

router.delete('/deleterecetas',(req, res)=>{
   
    res.send('soy el que borro todas las respuesta')
})

module.exports = router;