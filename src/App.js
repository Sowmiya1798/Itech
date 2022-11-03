import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import  AdminLogin  from './Component/AdminLogin'
import { Home } from './Component/Home'
import { StudentLogin } from './Component/StudentLogin'
import { TeacherLogin } from './Component/TeacherLogin'


function App() {

  const [link,setLink] = useState(true)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='student' element={<StudentLogin />} />
        <Route path='teacher' element={<TeacherLogin />} />

        {
        link === true ? (
          
<Route path='admin' element={<AdminLogin />} />
        ) : (<Route path='/' element={<Home/>}/>)
        } 
        
         
      </Routes>
    </div>
  )
}
export default App