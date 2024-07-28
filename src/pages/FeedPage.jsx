import React, { useEffect, useState } from 'react';
import UserComm from '../layout/UserComm';
import Post from '../layout/Post';
import Actions from '../layout/Actions';
import CommentComm from '../layout/CommentComm';
import WriteComm from '../layout/WriteComm';
import image from '../images/profile.jpg'
import { useSelector } from 'react-redux';
export default function FeedPage() {
    const [user,setUser]=useState([]);
    const [post,setPost]=useState([]);
    const [write,setWrite]=useState(false);
    const [like,setLike]=useState(false);
   
   
    const commnt=useSelector(store=>store.commentUser);
    useEffect(()=>{getUser()},[]);
    useEffect(()=>{getPost()},[]);

    const getUser=async()=>{
        const api=`https://dummyjson.com/users`
        const res=await fetch(api);
        const data=await res.json();
        setUser(data.users);
        
    }

    const getPost=async()=>{
        const api=`https://dummyjson.com/posts`
        const res=await fetch(api);
        const data=await res.json();
        setPost(data.posts);
        console.log(data);
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
    const handleWriteComment=(i)=>{
       setWrite(true);
      document.getElementById(i)?.classList.remove('hidden');
      document.getElementById(i)?.classList.add('flex');
      }
     
     
    

    


  return (
      
  
    <div className='flex flex-col w-full items-center gap-2 text-white  rounded-lg mt-9 mb-10' >
    
      {
       user.map((elm,i)=> <div key={i} className='w-4/5 md:w-2/3 lg:w-2/4 bg-zinc-900 flex flex-col p-4 gap-4 rounded-lg'>
      
       <UserComm 
         first={elm.firstName} 
         last={elm.lastName}
         username={elm.username} 
         image={elm.image}
        />
        
        <Post 
          title={post[i]?.title}
          postContent={post[i]?.body}
          like={post[i]?.reactions?.likes}
          buttonId={post[i]?.id}
          postID={post[i]?.id}
          
      />
      <Actions fun={()=>handleWriteComment((elm.id)*10)} clik={()=>handlelike(post[i])}/>
     
      {
       commnt.comment !== null?  <div className=' flex gap-4 border-2 rounded-xl p-3 '>
        <div>
          <img src={image} alt="" className='h-10 w-10 rounded-full overflow-hidden'/>
        </div>
      <div className='flex flex-col'>
      <p>michale divad</p>
       <p className='font-extralight text-xs'>@michale </p>
         {    
              
              commnt?.comment
         }
      </div>
       </div>
       :
       <></>
      }  
        <CommentComm />
        <WriteComm writeId={(elm.id)*10}/>
       </div>)
      }
     
     <div className='text-center'>No New Posts</div>
    </div>
  );
}
