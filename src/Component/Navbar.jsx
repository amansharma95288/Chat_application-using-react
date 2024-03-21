                 
import { AuthContext } from '../context/AuthContext'
import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
const Navbar=()=>{
  const {currentUser} = useContext(AuthContext)
    return (
            <div className="navbar">
                <span className="logo">Aao bat kare</span>
                 <div className="user">
                  <img src={currentUser.photoURL} alt="" />
                  <span>{currentUser.displayName}</span>
                  <button onClick={()=>signOut(auth)}>logout</button >
                 </div>
            </div>
    )
}
export default Navbar