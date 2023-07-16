import React from 'react'
import CapsuleCard from './CapsuleCard'

const List = ({ list }) => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {list.map((item) => (
            <CapsuleCard item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default List
