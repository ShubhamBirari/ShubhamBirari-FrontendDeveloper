import React from 'react'

const Input = (props) => {
  const { className, label } = props
  return (
    <>
      <div className={`${className} `}>
        {label && (
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>
        )}
        <input
          {...props}
          className={`block w-full rounded-md border-0 px-2.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `}
        />
      </div>
    </>
  )
}

export default Input
