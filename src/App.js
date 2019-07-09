import React from 'react';
import './App.css';
import Router from './router'
import {NavLink} from 'react-router-dom'


const Navigation = (props) => <nav className="navbar fixed-top navbar-expand-md">
            <div className="container">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">&#x2630;</button> 
                <NavLink className='navbar-brand' to='/'>Matthew's Beats</NavLink>
                <div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><NavLink className='nav-link' to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item"><NavLink className='nav-link' to='/tracks'>Tracks</NavLink>
                            </li>
                            <li className="nav-item"><NavLink className='nav-link' to='/cart'>Cart</NavLink>
                            </li>
                            <li className="nav-item"><NavLink className='nav-link' to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>


function App() {
  return (
    <div className='container-fluid'>
      <Navigation />

      <Router />
    </div>
  )
}

export default App;
