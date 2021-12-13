import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../store/actions'

const useCallCountries = () => {
  const countries = useSelector((store) => store.countries)
  const dispatch = useDispatch()
  useEffect(() => { // call o not to the api
    if (!countries.length) dispatch(getCountries())
  })

  return countries;
}

export default useCallCountries;