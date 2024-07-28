import React from 'react';
import image from '../images/error404.jpg'
export default function Error() {
  return (
    <div className='h-full bg-white flex justify-center items-center'>
      <img src={image} alt="" className='object-cover w-36'/>
    </div>
  );
}
