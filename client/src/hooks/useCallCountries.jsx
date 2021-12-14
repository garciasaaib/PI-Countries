import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getActivities, getCountries } from '../store/actions'

const useCallCountries = () => {
  const countries = useSelector((store) => store.countries)
  const dispatch = useDispatch()
  useEffect(() => { // call o not to the api
    if (!countries.length) {
      dispatch(getCountries())
      dispatch(getActivities())
    }
  })

  return countries;
}

export default useCallCountries;