import React from 'react'

const CapsuleCard = ({ item }) => {
  return (
    <div key={item?.capsule_serial} className="card border-2 rounded p-8">
      <div className="flex justify-center h-80">
        <div className="mt-8 text-center">
          <p className="text-2xl text-white h-20">
            {item?.missions[0]?.name ?? 'Lorem ipsum'}
          </p>
          <p className="mt-4  mx-4 text-md text-white h-24">
            {item?.details ?? 'Lorem ipsum dolor sit amet'}
          </p>
          <p className="mt-8 text-md text-white">{item?.type}</p>
          <p className="mt-1 text-md text-white">Status : {item?.status}</p>
        </div>
      </div>
    </div>
  )
}

export default CapsuleCard
