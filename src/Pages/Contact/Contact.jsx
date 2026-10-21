import React from "react";
import { Link } from "react-router";
import logInImg from '../../assets/logIn.avif'

const Contact = () => {
  return (
   <div className="md:flex items-center justify-between gap-5">
    <div>
      <img src={logInImg} alt="" />
    </div>
     <form className="mx-auto p-8">
      <title>lapata - LogIn</title>
      <fieldset className="fieldset rounded-box w-xs p-4 border mx-auto">
        <legend className="fieldset-legend text-2xl">Login</legend>

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <button className="btn btn-neutral mt-4">Login</button>

        <div>
            <p>Are You New here ? <Link to="/signUp" className="text-blue-400 underline">Sign up</Link></p>
        </div>
      </fieldset>
      
    </form>
   </div>
   
  );
};

export default Contact;
