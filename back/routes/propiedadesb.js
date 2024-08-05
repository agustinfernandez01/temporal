const express = require('express')
const router = express.Router();

const { allPropb , singlePropb } = require('../controllers/propiedadesb') 

router.get('/propiedadesb/',allPropb)
router.get('propiedadesb/:id',singlePropb)

module.exports = router