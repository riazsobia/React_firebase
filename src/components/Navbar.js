import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

export default function Navbar({isSideBarShow, setIsSideBarShow}) {
  const {logout, isPending}=useLogout();
  const {user}=useAuthContext();
  return (
    <div className='navbar'>
        <ul>
          <li className='logo'>
            <i className='fa fa-home img' style={{fontSize:'40px'}}></i>
            <span>Selva's</span>
          </li>

          {!user && (<><li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Signup</Link></li></>)}

         {/* { user && <li>
            { !isPending && <button className='btn' onClick={logout}>Logout</button>}
            { isPending && <button className='btn' disabled >Loging out...</button>}
          </li>} */}
          {!isSideBarShow && <i class="fa fa-bars" aria-hidden="true" onClick={()=>setIsSideBarShow(true)}></i>}
        </ul>
    </div>
  )
}
