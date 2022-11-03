import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputProps from './InputProps'
import './Home.css'
import { Person } from '@mui/icons-material'


export const Home = () => {

   const [admin, setAdmin] = useState(true)

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
      
        {
          admin ? (<Link to="admin">Admin Login</Link> ): null
        }
       &nbsp;&nbsp;
        <Link to="student">Student Login</Link>&nbsp;&nbsp;
        <Link to="teacher">Teacher Login</Link>&nbsp;&nbsp;
      </div>
    </div>
  )
}
