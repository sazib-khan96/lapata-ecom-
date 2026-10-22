import React, { useState } from "react";
import { Link } from "react-router";
import logInImg from '../../assets/logIn.avif'
import { toast } from "react-toastify";

const Contact = () => {
  const [password,setPassword] = useState('')
  const [err,setErr] = useState()
  

  const noSubmitehandle = (e) =>{
    e.preventDefault()
    
    const email = e.target.email.value 
    const pass = e.target.pass.value
    
  }

  const passwordOnChange = (e) =>{
     setPassword(e.target.value)
     if(password.length < 6){
        setErr('6 charecter or length')
     }
     else{
      setErr('')
     }
  }

  return (
   <div className="md:flex items-center justify-between gap-5">
    <div>
      <img src={logInImg} alt="" />
    </div>
     <form  onSubmit={noSubmitehandle} className="mx-auto p-8">
      <title>lapata - LogIn</title>
      <fieldset className="fieldset rounded-box w-xs p-4 border mx-auto">
        <legend className="fieldset-legend text-2xl">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" name='email' placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" onChange={passwordOnChange} defaultValue={password} required  name='pass' className="input" placeholder="Password" />
        <p className="text-red-600">{err}</p>
        <button className="btn btn-neutral mt-4">Login</button>

        <div>
            <p >Are You New here ? <Link to="/signUp" className="text-blue-400 underline">Sign up</Link></p>
        </div>
      </fieldset>
      
    </form>
   </div>
   
  );
};

export default Contact;
