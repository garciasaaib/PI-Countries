const { Router } = require('express');
const activityController = require('../controller/activity')

const router = Router();

// get countries list
router.post('/', async (req, res, next) => {
  let formData = req.body
  let newActivity = {
    name: formData.name, 
    difficulty: formData.difficulty, 
    duration: formData.duration, 
    season: formData.season
  }
  try {
    const response = await activityController.createActivity(newActivity, formData.countries) 
    res.json(response)
  } catch (error) {
    next(error)
  }
})

router.get('/', async (req, res, next) => {

  try {
    const response = await activityController.getAll() 
    res.json(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
