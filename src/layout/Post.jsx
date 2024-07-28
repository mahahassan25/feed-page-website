import React, { useState } from 'react';
import { SlLike } from "react-icons/sl";
export default function Post(props) {
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(true);
    }
  return (
    <div>
        <p>{props.title}</p>
       
        {
          
          
             props?.postContent?.length<150? 
             <p>{props.postContent}</p>
                                       :
                                      show? 
                                      <p>{props.postContent}</p>
                                      :<p>{(props.postContent)?.substring(0, 150)} <button className='font-bold' onClick={handleShow}>...</button></p>
            
             
        }
             <div className='flex gap-3 items-center pt-3 pb-3' id={props.buttonId}>
                <SlLike className=' font-bold '/>
                <span id={props.likeId}> {props.like}</span>
        </div>
        <hr />
        
      </div>
  );
}
