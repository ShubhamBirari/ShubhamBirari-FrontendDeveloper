import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from '../components/Form/Form'
import { getAllCapsules, setLoader } from '../redux/store'
import List from './List'

const Capsules = () => {
  const { allCapsules, params, loader } = useSelector((state) => state.reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoader(true))
    //Pagination implemented by the API is incorrect. It is giving me 13 records when I am passing limit as 10.
    dispatch(getAllCapsules({ params }))
  }, [])

  return (
    <>
      <Form />
      <List list={allCapsules} />
    </>
  )
}

export default Capsules
