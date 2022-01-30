import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from '../main/Routes'
import Logo from '../componentes/templates/Logo'
import Header from '../componentes/templates/Header'
import Nav from '../componentes/templates/Nav'
// import Home from '../componentes/home/Home'
import Footer from '../componentes/templates/Footer'

export default props =>
<BrowserRouter>
    <div className='app' >
        <Logo />
        <Header />
        {/* <Routes /> */}
        <Footer />
        {/* <Nav/> */}
        {/* <Home /> */}
     </div>
</BrowserRouter>
        
        

