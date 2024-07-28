import React from 'react';

export default function UserComm(props) {
  return (
    <div className='flex items-center gap-3'>
        <div className=''>
            <img src={props.image} alt="" className='w-20 h-20 border rounded-full border-1  overflow-hidden'/>
        </div>
        <div >
            <p>{props.first} {props.last}</p>
            <p>@{props.username}</p>
        </div>
      </div>
  );
}
