const { Country, Activity, Op } = require('../db')


const createActivity = async (activityObject, countriesArray) => {
  try {
    // console.log(activityObject, countriesArray)
    // const countriesPromises = countriesArray.map( async code => await Country) 

    let activity = await Activity.create({
      name: activityObject.name,
      difficulty: activityObject.difficulty,
      duration: activityObject.duration,
      season: activityObject.season,
    })
    await activity.addCountries(countriesArray)



    return activity
  } catch (error) {
    throw error
  }
}

const getAll= async() => {
  try {
    let activities = await Activity.findAll()
    return activities
  } catch (error) {
    throw error
    
  }
}

module.exports = {
  createActivity,
  getAll
}
