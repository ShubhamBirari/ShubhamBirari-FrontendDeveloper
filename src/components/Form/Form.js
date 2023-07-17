import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { getAllCapsules, setLoader, setParam } from '../../redux/store'

const Form = () => {
  const { params } = useSelector((state) => state.reducer)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const dispatch = useDispatch()

  const onSubmit = (data) => {
    const temp = { ...params, ...data }

    if (!temp.status) delete temp.status
    if (!temp.mission) delete temp.mission
    if (!temp.type) delete temp.type

    dispatch(setParam(temp))
    dispatch(setLoader(true))
    dispatch(getAllCapsules({ params: temp }))
  }

  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12 bg-black">
        <div className="mt-10 sm:mx-auto sm:w-full">
          <form
            className="justify-center align-middle md:flex sm:block"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              id="status"
              name="status"
              placeholder="Status"
              register={register}
              className="md:mx-2 lg:mx-4 xl:mx-8 sm:my-4 my-4"
            />

            <Input
              id="mission"
              name="mission"
              placeholder="Mission"
              register={register}
              className="md:mx-2 lg:mx-4 xl:mx-8 sm:my-4 my-4"
            />

            <Input
              id="type"
              name="type"
              placeholder="Type"
              register={register}
              className="md:mx-2 lg:mx-4 xl:mx-8 sm:my-4 my-4"
            />

            <div className="flex items-center">
              <Button
                label={'Search'}
                className="px-8 py-2 md:mx-2 lg:mx-4 xl:mx-8"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
