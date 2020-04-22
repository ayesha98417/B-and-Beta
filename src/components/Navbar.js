import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../App.css';
import logo from "../logo.png";
import styled from 'styled-components';
class Navbar extends Component {
    
    render() { 
        return ( 
            <div>
            <Navwrapper className="navbar navbar-expand-sm  px-sm-5 " >
                <img src={logo} alt="store" className="navbar-brand" />

                <BrowserRouter>
                <ul className="navbar-nav align-items-center ">

                <li className="nav-item ml-5">
                    <Link to="/Home" className="nav-link">Home</Link>
                </li>

                <li className="nav-item ml-2">
                    <Link to="/ProductList" className="nav-link">Products</Link>
                </li>

                <li className="nav-item ml-2">
                    <Link to="/WishList" className="nav-link">Wish-List</Link>
                </li>
                </ul>

                <form className="form-inline ml-5" style={{alignContent:"center"}}>
                    <input className="form-control form-control-sm" style={{width: "250px"}} type="search" placeholder="Search" aria-label="Search"></input>

                    <button><i class="fab fa-sistrix"></i></button>
                </form>
                
                <Link to='/Login' className="ml-auto"><button type="button" class="btn btn-outline-primary ">LogIn</button></Link>
                <Link to="/Signup" className="ml-2"><button type="button" class="btn btn-outline-primary ">SignUp</button></Link>

                  
            </BrowserRouter>
            </Navwrapper> 

            <NavWrap className="navbar navbar-nav navbar-expand-sm  px-sm-5">
            <BrowserRouter>
            <ul className="navbar-nav align-items-center ">
            
                <li className="nav-item ml-5">
                    <Link to="/Watches" className="nav-link">Watches</Link>
                </li>

                <li className="nav-item ml-2">
                    <Link to="/Perfumes" className="nav-link">Perfumes</Link>
                </li>

                <li className="nav-item ml-2">
                    <Link to="/GiftBoxes" className="nav-link">Gift Boxes</Link>
                </li>

                </ul>

                <li style={{fontSize:"30px"}} className="ml-auto"><Link to="/points" className="nav-link"><i className="far fa-gem"></i></Link></li>
                <li style={{fontSize:"30px"}} className="ml-4"><Link to="/history" className="nav-link"><i className="fas fa-history"></i></Link></li>
                <li style={{fontSize:"30px"}} className="ml-4"><Link to="/notification" className="nav-link"><i className="far fa-bell"></i></Link></li>
                
                </BrowserRouter>
                </NavWrap>   
         </div>
         );
        } 
    }
        const Navwrapper= styled.nav `
            background: var(--mainWhite);
            .nav-link {
                color: var(--mainBlue) !important;
                font-size: 1rem;
                 &: hover{
                     color: var(--lightBlue) !important;
                     text : "Notifications";
                 }
            }
        `

        const NavWrap= styled.nav `
            background: var(--lightBlue);
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            .nav-link {
                color: var(--mainWhite) !important;
                font-size: 0.9rem; 
                &: hover{
                    color: #FFFF66 !important;
                }}
        `

       
    
 
export default Navbar;