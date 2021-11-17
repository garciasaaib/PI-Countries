const { Router } = require('express');
const countryController = require('../controller/country')

const router = Router();

// get countries list
router.get('/', async (req, res, next) => {
  let { name } = req.query
  try {
    const response = await countryController.countriesList(name) 
    res.json(response)
  } catch (error) {
    next(error)
  }
})

// get a country by id
router.get('/:id', async (req, res, next) => {
  let { id } = req.params
  try {
    const response = await countryController.countryByPk(id.toLocaleUpperCase()) 
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
