import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import Logo from '../componentes/templates/Logo'
import Header from '../componentes/templates/Header'
import Nav from '../componentes/templates/Nav'
// import Home from '../componentes/home/Home'
import Footer from '../componentes/templates/Footer'

export default props =>

    <div className='app' >

        
        <Logo />
        <Header>
            <script src='C:\vscode\projeto-ppgcn\tela_de_cadastro\tela-cadastro\validarCPF.js'></script>
        </Header>
        <Footer />
        
        {/* <Nav/> */}
        {/* <Home /> */}
    </div>

