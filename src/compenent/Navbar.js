
import React from "react";
import { useRef } from "react";
import { FaGlobe, FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
 

import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    const dispatch = useDispatch()
    const distination = useRef()
    const number = useRef()
    const dateStart = useRef()
    const dateEnd = useRef()

    const filter = () => {
        dispatch({
            type: 'filter',
            paylod: {
                distination: distination.current.value,
                Voyageurs: number.current.value,
                dateStart: dateStart.current.value,
                dateEnd: dateEnd.current.value,
            }
        })
    }

    return (
      

            <header className="header">
                <div className="home">
                    <Link to='/'><FaHome  color="white"/></Link>
                </div>
                    <div className="inputs_nav">
                   
                        <input className="input1" type="text" placeholder="Distination" ref={distination}></input>
                        <input className="input2" type="text" onFocus={(e) => e.target.type = 'date'} ref={dateStart} placeholder="Arrivée"></input>
                        <input className="input3" type="text" onFocus={(e) => e.target.type = 'date'} ref={dateEnd} placeholder="Départ"></input>
                        <input  className="input4" type="text" onFocus={(e) => e.target.type = 'number'} ref={number} min="1" placeholder="Voyageurs"></input>
                        <button className="search" onClick={filter}>
                            <FaSearch />
                        </button>
                    </div>

              <div className="parent">
              <div className="child">
                
           
                <NavDropdown title={ <FaGlobe color='white' />} id="navbarScrollingDropdown">
                  
                  <NavDropdown.Item href="#action3">francais </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                   Anglais
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                   Arabic
                  </NavDropdown.Item>
                </NavDropdown>
                </div>
                <div  className="child">
                 <Link to='/login'><FaUserCircle color="white"  /></Link>
               
                 </div>
                  
              </div>
                
            </header>
            
       
    );
};


export default Navbar;