import React from 'react'
import './Nav.scss'
import {AiOutlineGitlab} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
                <h1><AiOutlineGitlab className='nav-logo'/>CRUD</h1>
                <div className="nav__links">
                    <NavLink to='/' className={({isActive})=>isActive?"active":"inactive"}>Home</NavLink>
                    <NavLink to='/add-student'>Add Student</NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav