import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Form from '../components/Form/Form'

const CapsuleList = () => {
  const { allCapsules } = useSelector((state) => state?.capsules)

  console.log(allCapsules)
  return (
    <>
      <Form />
    </>
  )
}

export default CapsuleList
