import React from 'react'
import './App.css'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import Login from './pages/Login'
import AdminDashBoard from './pages/AdminDashBoard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import Home from './pages/Home'
function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/adminDashboard" element={<AdminDashBoard/>}/>
    <Route path="/employeeDashboard" element={<EmployeeDashboard/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
