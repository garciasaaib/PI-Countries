const { Router } = require('express');
const countryController = require('../controller/country')

const router = Router();

// Configurar los routers
router.use('/', async (req, res, next) => {
  try {
    const countriesList = countryController.getAll() 
    res.json(countriesList)
  } catch (error) {
    next(error)
  }
})


module.exports = router;
