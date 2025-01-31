import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer';
import SlidingNav from './component/SlidingNav';
import Employe_Details from './component/Employe_Details';
import Controlled_Form from './component/Controlled_Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './component/Contact';
import Home from './component/Home';
import SideNav from './component/SideNav';
import { useSelector } from 'react-redux';
import About from './component/About';

function App() {
  const [count, setCount] = useState(0)

  const email="hsingh@gmail.com";

  const name="harshit singh"


  const lightMode=useSelector((state)=>state.theme.lightMode);

  return (
    <div className={lightMode ? "bg-[#D1E9F6]" : "bg-[hsl(220,71%,15%)]"}>
     
    <Router>
        
        <Header/>

      <Routes>
       
      <Route path="/" element={<Home />} /> 
        <Route path="/team" element={<Employe_Details />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/form" element={<Controlled_Form/>}/>
      </Routes>

      <Footer email={email} name={name}/>

    </Router>

    </div>
  )
}

export default App
