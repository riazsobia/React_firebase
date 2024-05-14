import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';
import './Sidebar.css';

export default function Sidebar() {
    const {user}=useAuthContext();
  return (
    <div>
        <div className='sidebar'>
            <div className='sidebar-content'>
                <div className='user'>
                    <Avatar src={user.photoURL} />
                    <p>Hey {user.displayName}</p>
                </div>
                <nav className='links'>
                    <ul>
                        <li>
                            <NavLink exact to='/'><i className="fa fa-dashboard img"></i><span>Dashboard</span></NavLink>
                        </li>
                        <li>
                            <NavLink to='/create'><i className="fa fa-plus img"></i><span>New Project</span></NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
