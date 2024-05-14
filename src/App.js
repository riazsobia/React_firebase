import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Project from './pages/project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

export default function App() {
  const {user, authIsReady} = useAuthContext()
  const [isSideBarShow,setIsSideBarShow] = useState(false)
  return (
    <div className='App'>
      {authIsReady && (
      <Router>
        {user && <Sidebar />}
        <div className='container'>
          <Navbar isSideBarShow={isSideBarShow} setIsSideBarShow={setIsSideBarShow} />
          <Switch>
            <Route exact path='/'>
              {!user && <Redirect to='/login'/> }
              { user && <Dashboard />}
            </Route>
            <Route path='/create'>
              {!user && <Redirect to='/login'/> }
              {user && <Create />}
            </Route> 
            <Route path='/login'>
              {user && <Redirect to='/' />}
              {!user && <Login />}
            </Route>
            <Route path='/signup'>
            {user && <Redirect to='/'/>}
              {!user && <Signup />}
            </Route>
            <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
          </Switch>
        </div>
        {user && isSideBarShow && <div className='user-list'>
        <i class="fa fa-times" aria-hidden="true" onClick={()=>setIsSideBarShow(false)}></i>
          <ul>
            <li>users</li>
          </ul>
          </div>}
      </Router>
      )}
    </div>
  )
}
