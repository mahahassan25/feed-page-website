import React, { useState } from 'react';
import { IoMdSend } from "react-icons/io";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/commentUser';
export default function WriteComm(props) {
 
  const commentRef=useRef();
  const dispatch=useDispatch();
  const sendComment=()=>{
   const comment= commentRef.current.value;
   console.log(comment);
        dispatch(addComment(comment));
  }
  return (

   <div className={`hidden `} id={props.writeId}>
               <input ref={commentRef} type="text"placeholder='write a comment' className='rounded-xl text-black w-full  p-2'/>
               <button onClick={sendComment} ><IoMdSend className="text-3xl"/></button>
             </div>
          
          
     
 
  );
}
