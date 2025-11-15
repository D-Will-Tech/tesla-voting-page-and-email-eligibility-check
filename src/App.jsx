
import ShareSection from './component/ShareSection.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import {  Route, Routes, useLocation } from 'react-router-dom'
import TeslaVoteH from './component/TeslaVoteH.jsx'





export default function App() {
  const location = useLocation()
  const hideLayoutOn = ["/teslavote"]
  const showLayout = !hideLayoutOn.includes(location.pathname)

  console.log("currnet path:", location.pathname)
  console.log("showLayout value:", showLayout)



  return (
    <>
    
       {showLayout && <Navbar/>} 
       <Routes>
        <Route path='/' element={<ShareSection/>}/>
        <Route path='/teslavote' element={<TeslaVoteH/>}/>
       </Routes>
       {showLayout && <Footer/>}

    </>
  
  )
}