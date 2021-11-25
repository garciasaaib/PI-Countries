import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../store/actions'

const useCallCountries = () => {
  // console.log(!!filter)
  // const [countriesFiltered, setCountriesFiltered] = useState([])
  const countries = useSelector((store) => store.countries)
  // const filters = useSelector((store) => store.filters)
  const dispatch = useDispatch()
  // const setCopyOfCountries = async() => {
    //   await setCountriesFiltered([...countries])
    // } 
    useEffect(() => { // call o not to the api
      if (!countries.length) {
       dispatch(getCountries())
      // setCopyOfCountries()
    }
  }, [])


  // useState()
  // useEffect(() => {
  //   if (filter) {
  //     console.log(filters.filterByName)
  //     // let newCountries = countries.filter((data) => data.name.includes(filters.orderByName))
  //     // let countries = []
  //     // switch(filters.filterByName) {
  //       //   case '': {
  //         //   }
  //         // }
  //       }
  //     }, [filters])
  //     console.log(countriesFiltered)






  return countries;
}

export default useCallCountries;