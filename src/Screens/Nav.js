import React, { useRef, useState } from 'react'
import '../Screens/Nav.css'
import { HouseDoorFill ,List} from 'react-bootstrap-icons'
function Nav() {
    const navref=useRef()
    const [display, setDisplay] = useState(false)
    const menu=document.querySelector('.navlist')
    const res=document.querySelector('.resicon')
  return (
    <div>
    <div  className='navbar'>
        <div className='logo'>
            <HouseDoorFill/><h3 style={{marginLeft:10}}>Algomox</h3>
        </div>
        <ul className='navlist' ref={navref}>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
            <li>SignIn</li>
        </ul>
        <div className='resicon'>
            
            <List onClick={()=>{
                navref.current.classList.toggle('open')
            
            }}/>
        </div>
    </div>
    </div>
  )
}

export default Nav