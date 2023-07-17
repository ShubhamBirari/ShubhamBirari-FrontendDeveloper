import React from 'react'
import CapsuleCard from './CapsuleCard'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader/Loader'

const List = ({ list }) => {
  const { loader } = useSelector((state) => state.reducer)
  return (
    <div className="bg-black h-auto min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {loader ? (
          <Loader />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {list.map((item) => (
                <CapsuleCard item={item} />
              ))}
            </div>
            {list.length === 0 && (
              <h3 className="text-white flex justify-center">
                No data found !
              </h3>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default List
