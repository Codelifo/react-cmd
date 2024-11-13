import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../AuthProvider/AuthProvider";
import toast from 'react-hot-toast';

const Register = () => {
  const {registerUser, socialSignIn} = useContext(authContext)
    
    const handleSignUp = (e) =>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        const name = e.target.name.value 
        console.log(email, password , name)
        
        registerUser(email, password)
        .then(result =>{
          console.log(result.user)
          e.target.reset
          toast.success('Congratulations! Your account has been created successfully.')
        })
        .catch(error => {
          console.log("ERROR-",error.message)
          toast.error(error.message)
        })
    } 

    const handleSignInWithGoogle = () => {
      socialSignIn()
        .then((result) => {
          toast.success("Successfully Login.");
          console.log(result.user);
          navigate("/");
        })
        .catch((error) => {
          console.log("ERROR--", error.message);
        });
    };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Sign Up now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto border border-gray-500 shadow-2xl shadow-sky-500">
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="User Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <button className="btn text-black bg-sky-500 hover:text-white" >SignUp</button>
            <p className="text-sm text-center my-4">Already have an account?<Link to={'/login'}><span className="text-sky-500 cursor-pointer"> Login</span></Link></p>
            <div className="divider">OR</div>
            <button className="btn" onClick={handleSignInWithGoogle} ><span className="text-2xl"><FcGoogle/></span> SignUp With Google </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Register;
