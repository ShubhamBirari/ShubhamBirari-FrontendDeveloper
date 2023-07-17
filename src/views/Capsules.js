import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from '../components/Form/Form'
import { getAllCapsules, setLoader } from '../redux/store'
import List from './List'
import Modal from '../components/Modal/Modal'

const Capsules = () => {
  const { allCapsules, params, isModalOpen } = useSelector(
    (state) => state.reducer
  )
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
      <Modal isOpen={isModalOpen} />
    </>
  )
}

export default Capsules
