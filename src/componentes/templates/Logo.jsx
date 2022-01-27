import  './Logo.css'
import logo from '../../assests/imgs/ppgcn_logo.png'
import React from 'react'

export default props =>
      <aside className='Logo'>
          <a href='/' className='logo'>
              <img src={logo} alt='Logo' />
          </a>
      </aside>