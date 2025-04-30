import Link from 'next/link';
import React from 'react'
import { RiLogoutCircleRLine } from 'react-icons/ri';

export default function Exit() {
      return (
    <div className="flex justify-between hover:bg-gray-100 cursor-pointer">
      <Link href="/login" className="block px-4 py-2 text-sm text-gray-700">
        خروج
      </Link>
      <RiLogoutCircleRLine className="mx-2 mt-2 cursor-pointer" />
    </div>
  );
}





