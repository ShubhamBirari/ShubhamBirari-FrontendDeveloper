import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = () => {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-12 bg-black">
        <div className="mt-10 sm:mx-auto sm:w-full">
          <form
            className="justify-center align-middle md:flex sm:block"
            action="#"
            method="POST"
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Status"
              autoComplete="email"
              required
              className="md:mx-2 lg:mx-4 xl:mx-8 sm:my-4 my-4"
            />

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Original launch"
              autoComplete="email"
              required
              className="md:mx-2 lg:mx-4 xl:mx-8 sm:my-4 my-4"
            />

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Type"
              autoComplete="email"
              required
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
