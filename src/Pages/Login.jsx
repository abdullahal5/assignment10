import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Components/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const [errLogin, setErrLogin] = useState('')
    const [success, setSucess] = useState('')
    const handleLogin = (e) =>{

        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        signInUser(email, password)
        .then(res => {
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
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;