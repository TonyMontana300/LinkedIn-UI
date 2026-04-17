import React from 'react'
import { Link } from 'react-router-dom'
import BlackBtn from '../ui/BlackBtn'

const PeopleCard = ({text, description, btn}) => {
  return (
    <div className="flex gap-3 border-b border-b-gray-300 pb-5 mt-3">
        <Link
          to="#"
          className="w-14 h-14 rounded-full flex items-center justify-center bg-[#DDE7F1]"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5" />
            <path
              d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </Link>
        <Link to="#" className="">
          <p className="text-gray-900 font-semibold hover:underline hover:text-blue-600">
            {text}
          </p>
          <p className="text-sm md:w-50 text-gray-900 mb-4">
            {description}
          </p>
          <div className='w-29'>
            <BlackBtn
              text={btn}
              svg={
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="6"
                    r="4"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                  <path
                    d="M21 10H19M19 10H17M19 10L19 8M19 10L19 12"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.9975 18C18 17.8358 18 17.669 18 17.5C18 15.0147 14.4183 13 10 13C5.58172 13 2 15.0147 2 17.5C2 19.9853 2 22 10 22C12.231 22 13.8398 21.8433 15 21.5634"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              }
            />
          </div>
        </Link>
      </div>
  )
}

export default PeopleCard
