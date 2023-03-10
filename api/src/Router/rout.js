const { Router } = require('express');
const router = Router();
const getReceta = require('./getReceta/router')
const postReceta = require('./postReceta/router')
const putReceta = require('./putReceta/router')
const deleteReceta = require('./deleteRecetas/router')

router.use('/', getReceta)
router.use('/', postReceta)
//router.use('/putreceta', putReceta)
//router.use('/deletereceta', deleteReceta)

module.exports = router;