import React, { useEffect, useState } from 'react';
import { DiVim } from 'react-icons/di';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import image from '../images/profile.jpg'
export default function CommentComm(props) {
  const [comments,setComment]=useState([]);
  const dispatch=useDispatch();
  useEffect(()=>{loadComments()},[])
  const loadComments=async()=>{
    const api='https://dummyjson.com/comments';
    const res=await fetch(api);
    const data=await res.json();
     setComment(data.comments);
  }
  const [count,setCount]=useState(0);
  const handleShow=()=>{
    setCount(count+1);
  }

  return(

      <div className={count===0?'flex flex-col gap-2  ':'flex flex-col gap-2 max-h-72  overflow-y-scroll'}>
       
        
        {  count===0?
                    comments.slice(0,2).map((elm,i)=> <div key={i} className=' flex gap-4 border-2 border-white rounded-xl p-3 '>
                      <div>
                        <img src={image} alt="" className='w-10 h-10 overflow-hidden rounded-full'/>
                      </div>
                   <div className='flex flex-col'>
                   <Link to={`/${elm.id}`} onClick={()=> dispatch(addUser(elm))} className='hover:text-blue-600 hover:underline'>{elm.user.fullName}</Link> 
                    <p className='font-extralight text-xs'>@{elm.user.username}</p>
                    <p>{elm.body}</p>
                   </div>
                         </div>)
                    :
                    comments.slice(0,2+count*3).map((elm,i)=> <div key={i} className='flex gap-4 border-2 border-white rounded-xl p-3 '>
                       <div>
                        <img src={image} alt="" className='w-10 h-10 overflow-hidden rounded-full'/>
                      </div>
                   <div className='flex flex-col'>
                   <Link to={`/:${elm.id}`} onClick={()=> dispatch(addUser(elm))} className='hover:text-blue-600 hover:underline'>{elm.user.fullName}</Link> 
                    <p className='font-extralight text-xs'>@{elm.user.username}</p>
                    <p>{elm.body}</p>
                   </div>
                         </div>) 
          
            
        }
        {
            count>=comments.length/3-2?
                              <p>nothing to show</p>
                              :
                              <button className='text-left capitalize hover:text-blue-600 hover:underline' onClick={handleShow}>show more comments...</button>
        }

      </div>
  );
  
}
 
   
  
 


