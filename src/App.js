import React from 'react'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
// import SideNavBar from './Components/SideNavBar'
import './Components/style.css'
import Contact from './Components/Contact'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './Components/Footer'
import About from './Components/About'
import Carrier from './Components/Carrier'
export default function App() {
  return (
    <div className='main_div' >
      <Router>    
        <Navbar />
        {/* <SideNavBar/> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/carrier' element={<Carrier />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}
