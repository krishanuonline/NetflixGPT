import React from 'react'
import logo from '../assets/logo.png'
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  }


  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-50 flex justify-between">
      <img src={logo} alt="logo" className='w-48'/>
      {user &&
        <div className='flex p-2'>
          <img src={user?.photoURL} alt="" className='w-10 h-10 my-auto mx-2' />
          <button className='font-bold text-white' onClick={handleSignout}>Sign out</button>
        </div>
      }

    </div>
    
  )
}

export default Header