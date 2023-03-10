const express = require('express')
const router = express.Router();

router.get('/:receta/:numero',(req, res)=>{
   let receta= req.params;
   let {dieta,numero} = req.query;
   console.log(receta, dieta, numero)
    res.send('soy el que devuelve todas las respuesta')
})

module.exports = router;