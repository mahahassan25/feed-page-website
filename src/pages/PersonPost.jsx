import React, { useEffect, useState } from 'react';
import image from '../images/profile.jpg'
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/commentUser';
import { useSelector } from 'react-redux';import { Button, Modal } from "flowbite-react";
import WriteComm from '../layout/WriteComm';
export default function PersonPost() {
    const [openModal, setOpenModal] = useState(false);
    const [like,setLike]=useState(false);
    const user=useSelector(store=>store.userSlice);
    const commt=useSelector(store=>store.commentUser)
    const [posts,setPOsts]=useState([]);
    const commentRef=useRef();
  const dispatch=useDispatch();
    useEffect(()=>{getPost()},[])
    const getPost=async()=>{
       const api=`https://dummyjson.com/posts/user/${user.id}`;
       const res=await fetch(api);
       const data=await res.json();
       setPOsts(data.posts);
    }
    const handlelike=(elm)=>{
      if(like){

        setLike(false);
        elm.reactions.likes--
        document.getElementById(elm.id).classList.remove('text-blue-600')
        document.getElementById(elm.id).classList.add('text-white') 
      }else{
        setLike(true);
        elm.reactions.likes++;
        document.getElementById(elm.id).classList.remove('text-white')
        document.getElementById(elm.id).classList.add('text-blue-600') 
      }
     
    }
    const sendComment=()=>{
      const comment= commentRef.current.value;
      console.log(comment);
           dispatch(addComment(comment));
     }
  return (
  <div className='flex flex-col w-full items-center gap-2 text-white  rounded-lg mt-9 mb-10'>
    {
         posts?.map((elm,i)=> 
            <div key={i} className='w-4/5 md:w-2/3 lg:w-2/4 bg-zinc-900 flex flex-col p-4 gap-4 rounded-lg'>
                 <div className='flex gap-3 items-center'>
                    <div>
                         <img src={image} alt="" className='w-16 h-16 rounded-full overflow-hidden'/>
                   </div>
               <div>
                    <p>{user.fullName}</p>
                    <p className='font-extralight text-xs'>@{user.username}</p>
               </div>
           </div>
           <div className='flex flex-col gap-2'>
               <p>{elm.title}</p>
               <p>{elm.body}</p>
           <div className='flex gap-2 items-center'>
           <SlLike />
              <span>{elm.reactions.likes}</span>
            </div>
           </div>
           <hr />
           <div className=''>
        <div className='flex justify-between  pb-3'>
            <div className='flex items-center gap-1' id={elm.id}>
              <SlLike />
              <button onClick={()=>handlelike(elm)}  >like</button>
            </div>
            <div className='flex items-center gap-1'>
              <FaRegComment />
              <button >comment</button>
            </div>
            <div className='flex items-center gap-1'>
              <IoMdShareAlt />
              <button  onClick={() => setOpenModal(true)}>share</button>
              <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
           
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to share this post?
            </h3>
            <div className='flex justify-evenly items-center mb-2'>
              <p className='bg-gray-100 p-3 rounded-xl'>http://yeahlemons.com/</p>
             <Button><IoCopyOutline /></Button>
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"share"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
               cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
            </div>
           
        </div>
        <hr />
      </div>
      <div >
      {
        commt.comment !==null ?  <div className='border-2 rounded-xl p-3'>
        <p>Maha Hassan</p>
        <p className='font-extralight text-xs'>@maha</p>
          {    
               
               commt?.comment
          }
        </div>
        :
        <></>
      }
      </div>
       <div className='flex' >
               <input ref={commentRef} type="text"placeholder='write a comment' className='rounded-xl text-black w-full  p-2'/>
               <button onClick={sendComment} ><IoMdSend className="text-3xl"/></button>
             </div>
          
         </div>)
    }
  </div>
  );
}
