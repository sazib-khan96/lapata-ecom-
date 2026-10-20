import React from "react";
import { Link } from "react-router";
const SignUp = () => {
  return (
    
     <form className="mx-auto p-8">
      <title>Lapata - Sign Up</title>
      <fieldset className="fieldset rounded-box w-xs p-4 border mx-auto">
        <legend className="fieldset-legend">Sign Up </legend>

        <label className="label">Name</label>
        <input type="Name" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />



        <button className="btn btn-neutral mt-4">Sign Up</button>

        <div>
            <p>All Ready have an acccount? <Link to="/contact" className="text-blue-400 underline">Log in</Link></p>
        </div>
      </fieldset>
      
    </form>
   
  );
};

export default SignUp;
