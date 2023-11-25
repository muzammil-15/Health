import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { navlinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Menunav = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="absolute w-[200px] z-10">

      <MenuOpenIcon className='text-[#000]' onClick={toggleMenu} />

      {menuVisible && (
        <div className="absolute right-0 mt-2 bg-white border rounded shadow-md">
          <ul>
            <li className="px-4 py-2 ">
              <Link href="#"><Image src="/images/logo.png" alt='not found' width={50} height={50} /></Link></li>
            {
              navlinks.map((item, ind) => (
                <li className="px-4 py-2 hover:bg-gray-100" key={ind}>
                  <Link className='text-[#000000]' key={item.title} href={item.url}>{item.title}</Link></li>
              ))
            }

            <li className='px-4 py-2'>
              <button className='bg-[#07A29E] text-lg font-normal p-2 w-[160px] h-[50px] rounded-md text-[#FFF]'>LOGIN</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menunav;