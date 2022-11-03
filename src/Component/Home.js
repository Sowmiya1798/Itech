import React from 'react'
import { Link } from 'react-router-dom'
import InputProps from './InputProps'
import './Home.css'
import { LogoDev, Person } from '@mui/icons-material'

export const Home = () => {
  return (
    <div>
      <div className='heading'>
        <h3>Home Page For itech india school</h3>
      </div>
      <div className='mui'><Person className='mui'/></div>
      
      <div className="inputprops">
        <InputProps />
      </div>

      <div className='link'>
        
        <Link to="admin">Admin Login</Link> &nbsp;&nbsp;
        <Link to="student">Student Login</Link>&nbsp;&nbsp;
        <Link to="teacher">Teacher Login</Link>&nbsp;&nbsp;
      </div>
    </div>
  )
}
