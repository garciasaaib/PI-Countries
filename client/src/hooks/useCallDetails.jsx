import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCountry } from "../store/actions"

const useCallDetails = (id) => {
  const country = useSelector(store => store.country)
  const dispatch = useDispatch()

  useEffect(() => {
    if (country.id !== id) dispatch(getCountry(id))
  })

  return country;
}

export default useCallDetails;