import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

  const dispatch = useDispatch(); //Always write hook at the 1st of the component


    //Router
    const appRouter = createBrowserRouter([
        {path: '/', element: <Login />},
        {path: '/browse', element: <Browse />},
    ])

    useEffect(()=>{

      onAuthStateChanged(auth, (user) => {
        //If user sign in
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName})); // add to store
  
        }
        else {
          dispatch(removeUser());
        }
      });
    },[])



  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
