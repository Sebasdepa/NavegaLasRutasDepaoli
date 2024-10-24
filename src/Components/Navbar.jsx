import React from "react"
import './navBar.css'
import CartWidget from "../CartWidget"

const Navbar = () => {
    return(
        <div className='nav'> 
            
            <h1> Navbar</h1>

            <a href=""> Home </a>
            <a href=""> Tienda </a>
            <a href=""> Sobre Nosotros </a>
            <a href=""> Contacto </a>
            <CartWidget/>
        </div>
    )
}

export default Navbar