import React from 'react'

const CapsuleCard = ({ item }) => {
  return (
    <div key={item?.capsule_serial} className="card border-2 rounded p-8">
      <div className="flex justify-center h-72">
        <div className="mt-8 text-center">
          <p className="text-2xl		 text-white h-24">
            {item?.missions[0]?.name ?? 'Lorem ipsum'}
          </p>
          <p className="mt-4  mx-4 text-md		 text-white">
            {item?.details ?? 'Lorem ipsum dolor sit amet'}
          </p>
        </div>
      </div>
      {/* <p className="mt-8 text-lg text-white">{item?.type}</p>
      <p className="mt-1 text-white">Status : {item?.status}</p> */}
    </div>
  )
}

export default CapsuleCard
