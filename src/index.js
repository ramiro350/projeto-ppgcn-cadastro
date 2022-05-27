import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './main/App';
import Login from './Pages/loginUser';
import Password from '../src/Pages/forgotPassword'
import LogOff from '../src/Pages/logoff'
import Adm from './Pages/Admin';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from '../src/Context/AuthConfig'

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/cadastro' element={<App />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Senha' element={<Password />} />
        <Route path='/logoff' element={<LogOff />} />
        <Route path='/adm' element={<Adm />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
)

// App.post('/add', function(req,res){
//   res.send('enviado')
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
