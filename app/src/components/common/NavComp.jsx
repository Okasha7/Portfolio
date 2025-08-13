'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl transition-colors duration-200 ${
        isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
