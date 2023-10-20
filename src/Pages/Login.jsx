import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";
import { GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

const Login = () => {
    const { signInUser , auth} = useContext(AuthContext);
    const [errLogin, setErrLogin] = useState('')
    const [success, setSucess] = useState('')
    const provider = new GoogleAuthProvider()
    const handleLogin = (e) =>{
        
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        signInUser(email, password)
        .then(res => {
          e.target.reset()
          
            console.log(res.user)
            setSucess('User logged in successfully')
        })
        .catch(err =>{
            console.log(err)
            setErrLogin(err.message)
        })
        setErrLogin('')
        setSucess('')
        
        
        
    }
    

    const handleGoogle =() =>{
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result.user)
        })
        .then(err =>{
            console.logA(err)
        })
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl font-bold text-center">Login</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
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
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <p>
                  Don't have an account? <Link className="text-blue-700 underline" to="/register">please Register</Link>
                </p>
                {
                    errLogin && <p className="text-red-600">{errLogin}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
                <div className="form-control mt-6">
                  <button onClick={handleGoogle} type="submit" className="btn btn-primary">Google Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;