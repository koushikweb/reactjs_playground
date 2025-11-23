import React from 'react' 
 
import './App.css'
import './Menu.css'
import UserData from './UserData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SaveData from './SaveData'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path='/'/> 
          <Route path='/userlist' element={<UserData />}/> 
          <Route path="/savedata" element={<SaveData />}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
