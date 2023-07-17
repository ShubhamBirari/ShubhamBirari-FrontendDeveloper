import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/store'

const Modal = ({ isOpen }) => {
  const { selected } = useSelector((state) => state.reducer)

  const {
    capsule_serial,
    details,
    landings,
    type,
    original_launch,
    original_launch_unix,
    reuse_count,
    status,
    missions
  } = selected ?? {}
  const dispatch = useDispatch()

  return (
    <>
      {isOpen && (
        <div class="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {missions[0]?.name ?? 'Lorem ipsum'}
                </h3>
                <button
                  type="button"
                  onClick={() => dispatch(toggleModal(false))}
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6 text-white">
                <table>
                  <tr>
                    <td>Serial</td>
                    <td className="px-8">: {capsule_serial}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td className="px-8">: {status}</td>
                  </tr>
                  <tr>
                    <td>Launch date</td>
                    <td className="px-8">: {original_launch}</td>
                  </tr>
                  <tr>
                    <td>Reuse count</td>
                    <td className="px-8">: {reuse_count}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td className="px-8">: {type}</td>
                  </tr>
                  <tr>
                    <td>Details</td>
                    <td className="px-8">: {details}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
