'use client'

import { FaRegCopyright } from 'react-icons/fa'
import { IoIosArrowUp } from 'react-icons/io'

export default function Footer() {
  const date = new Date()

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="bg-black text-white py-8 px-4 flex items-center justify-between">
      <div className="flex items-center justify-start">
        <FaRegCopyright className="size-8 mr-2" />
        {date.getFullYear()}. All rights are reserved
      </div>
      <div>
        <button
          className="ring ring-violet-400 p-2 rounded"
          onClick={() => scrollUp()}
        >
          <IoIosArrowUp className="size-8" />
        </button>
      </div>
    </div>
  )
}
