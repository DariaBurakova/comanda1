
import { render } from "@testing-library/react";
import React from "react";
import { Container, Nav, Navbar,Button,Form,FormControl} from "react-bootstrap";
import { Route ,Routes,BrowserRouter,Link} from "react-router-dom";
import {Home}   from "../Home/home.js";
import {About} from '../About/about';
import {Contacts} from '../Contacts/contacts';
import {Articles} from '../Articles/articles'
import BarChart from '../BarChart/BarChart'
import newLogo from '../../img/newLogo.png'
import luna from '../../img/icon2.svg'
import lunaEnd from '../../img/icon3.svg'
import { useState } from "react";
export const Header=({switchTheme})=>{
    const [imgState,setImgState]=useState(luna)
    const changeImg=()=>{
        switchTheme()
        if(imgState==luna){
            setImgState(lunaEnd)
        }else{
            setImgState(luna)
        }
        
    }

        return(
            <BrowserRouter>
        <div>
<Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href="/">
<img src={newLogo} height='50' width='60' className='d-inline-block align-logo' alt='logo'   />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="resposive-navbar-nav"/>
    <Navbar.Collapse id="resposive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Главная</Nav.Link>
            <Nav.Link href="/about">О нас</Nav.Link>
            <Nav.Link href="/contacts">Контакты</Nav.Link>
            <Nav.Link href="/articlec">Курсы</Nav.Link>
            <Nav.Link href="/statistics">Статистика</Nav.Link>
        </Nav>
        
    </Navbar.Collapse>
    <Button variant="outLine-info" onClick={changeImg}><img src={imgState} height='40' width='40' className='d-inline-block align-logo'/></Button>
    </Container>
   
</Navbar>

</div>

<Routes>
        <Route  path='/' element={<Home/>}/>
        <Route   path='/about' element={<About/>}/>
        <Route  path='/contacts' element={<Contacts/>}/>
        <Route   path='/articlec' element={<Articles/>}/>
        <Route   path='/statistics' element={<BarChart/>}/>
       
</Routes>
</BrowserRouter>
        )
}