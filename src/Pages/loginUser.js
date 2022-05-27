import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../Context/AuthConfig'
import axios from 'axios'
import '../Pages/loginUser.css'
import { Link, useNavigate } from 'react-router-dom'
import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"

function Login() {
   let nav = useNavigate()
   const {authenticated} = useContext(Context)
   let[control,setControl] = useState(0)
   console.log(authenticated)
   const [email, setEmail] = useState("")
   const [token, setToken] = useState([])
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }
   
   async function Entrar(event) {
     event.preventDefault()
      // const formData = new FormData()
      console.log(email, password)
     await axios({
         method: "post",
         url: "https://ppgcn.herokuapp.com/admin/login",
         data: {
            email: email,
            senha: password
         },
         headers: { "content-Type": "application/json" },
      })
         .then(e =>{
            console.log(e)
            console.log(e.data.data.token)
            const token = e.data.data.token 
            localStorage.setItem('token',token)
            axios.defaults.headers.common['authorization'] = token
            setControl(1)
         })
         .catch(err => {
            alert(err)
            console.log(err)
         });
      }
      if(control == 1){
         nav('/adm')
         setControl(0)
      }

   return (
      <div className="login">
         <div className="login-logo px-1">
            <img
               src="https://anzuns.org/wp-content/uploads/2018/02/admin_login.png"
               alt="MdLockLogin App"
            />
         </div>

         <div className="login-right mb-3 ">
            <h1>Acessar Administração</h1>

            <form >

               <div className="login-loginInputEmail ">
                  <MdEmail />
                  <input
                     type="email"
                     placeholder="Email"
                     value={email}
                     required
                     onChange={e => setEmail(e.target.value)}
                  />
               </div>

               <div className="login-loginInputPassword">
                  <MdLock />
                  <input
                     placeholder="Senha"
                     type={show ? "text" : "password"}
                     value={password}
                     required
                     onChange={e => setPassword(e.target.value)}
                  />
                  <div className="login-eye">
                     {show ? (
                        <HiEye
                           size={20}
                           onClick={handleClick}
                        />
                     ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
                  </div>
               </div>
            </form>

            <button type="submit" id="btn" onClick={Entrar}>
               Login
            </button>

         </div>
      </div>
   )
   
}

export default Login