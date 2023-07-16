import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from '../components/Form/Form'
import { getAllCapsules } from '../redux/store'
import List from './List'

const Capsules = () => {
  const { allCapsules, params } = useSelector((state) => state.reducer)
  const dispatch = useDispatch()

  useEffect(() => {
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
