// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <span className="text-white hover:text-blue-300">Trang Chủ</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="text-white hover:text-blue-300">Giới Thiệu</span>
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)} // Mở dropdown khi rê chuột vào
            onMouseLeave={() => setIsDropdownOpen(false)} // Đóng dropdown khi rê chuột ra
          >
            <button className="text-white hover:text-blue-300 focus:outline-none">
              Dịch Vụ
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-blue-600 mt-2 rounded-md shadow-lg">
                <li>
                  <Link href="/services/service1">
                    <span className="block px-4 py-2 hover:bg-blue-100">Dịch Vụ 1</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/service2">
                    <span className="block px-4 py-2 hover:bg-blue-100">Dịch Vụ 2</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/service3">
                    <span className="block px-4 py-2 hover:bg-blue-100">Dịch Vụ 3</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact">
              <span className="text-white hover:text-blue-300">Liên Hệ</span>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="p-2 rounded-md"
        />
        <button className="bg-white text-blue-600 p-2 rounded-md ml-2">
          Tìm
        </button>
      </div>
    </nav>
  );
};

export default Navbar;