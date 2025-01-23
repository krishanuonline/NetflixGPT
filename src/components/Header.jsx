import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  
  const dispatch = useDispatch(); //Always write hook at the 1st of the component
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  

  const handleSignout = () => {
    signOut(auth).then(() => {}).catch((error) => {
      console.log(error);
    });
  }

  useEffect(()=>{

    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      //If user sign in
      if (user) {
        // const {uid, email, displayName, photoURL} = auth.currentUser;
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL})); // add to store
        console.log(photoURL)

        navigate('/browse');
      }
      else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return ()=> unsubscribe(); //Unsubscribe when component unmount
  },[])


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img src={logo} alt="" className='w-48'/>
      {user &&
        <div className='flex p-2'>
          <img src={user?.photoURL} alt="ff" className='w-10 h-10 my-auto mx-2' />
          <button className='font-bold text-white' onClick={handleSignout}>Sign out</button>
        </div>
      }

    </div>
    
  )
}

export default Header