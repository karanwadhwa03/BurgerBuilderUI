import React from 'react'
import logo from './burger.png'
import './../App.css'
const Toolbar=()=>{
    return(
    <div>

        <nav class="navbar navbar-dark bg-success ">
        <a class="navbar-brand" href="#">
        
        
        <img src={logo} className="burgerheight mr-2"></img> 
        Burger
        </a>
        <a href="" className="nav-link text-white ">HOME </a>

        <a href="" className="nav-link text-white bg-dark ">CheckOut </a>
        
        </nav>
    </div>
    )

}
export default Toolbar