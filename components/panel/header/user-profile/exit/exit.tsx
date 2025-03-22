import React from 'react'
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Exit = () => {
  return (
    <div className="flex justify-between cursor-pointer">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
        خروج
      </a>
      <RiLogoutCircleRLine className="mx-2 mt-2 cursor-pointer" />
    </div>
  );
}

export default Exit




