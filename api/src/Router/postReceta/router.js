const express = require('express')
const router = express.Router();

router.post('/postreceta',(req, res)=>{
   const {name,dieta,descripcion}=req.body;
   console.log(name,dieta,descripcion)
    res.send('soy el que guardo todas las respuesta')
})

module.exports = router;