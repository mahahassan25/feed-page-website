import React from 'react';
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { Button, Modal } from "flowbite-react";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from 'react';
export default function Actions(props) {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className=''>
    <div className='flex justify-between  pb-3'>
        <div className='flex items-center gap-1 '>
          <SlLike className={props.like?'text-blue-700':'text- white'}/>
          <button onClick={props.clik} className={props.like?'text-blue-700':'text- white'}>like</button>
        </div>
        <div className='flex items-center gap-1'>
          <FaRegComment />
          <button onClick={props.fun}>comment</button>
        </div>
        <div className='flex items-center gap-1'>
          <IoMdShareAlt />
          <button  onClick={() => setOpenModal(true)}>share</button>
          <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
       
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to share that post?
        </h3>
        <div className='flex justify-evenly items-center mb-2'>
          <p className='bg-gray-100 p-3 rounded-xl'>http://yeahlemons.com/</p>
         <Button><IoCopyOutline /></Button>
        </div>
        <div className="flex justify-center gap-4">
          <Button color="failure"  onClick={() => setOpenModal(false)}>
            {"share"}
          </Button>
          <Button color="gray"  onClick={() => setOpenModal(false)}>
           cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
        </div>
        {

        }
    </div>
    <hr />
  </div>
  );
}
