import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser, setLoading} = useContext(AuthContext)


    const [register, setRegister] = useState('')
    const [successRegister, setSuccessRegister] = useState('')
    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log(name, email, password, photo);

        setRegister("");
        setSuccessRegister("");


        if (password.length < 6) {
          setRegister("Your password must be 6 character or longer");
          return;
        } else if (!/[A_Z]/.test(password)) {
          setRegister("You have to give atleast one captial letter");
          return;
        } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
          setRegister("There need atleast one special character");
          return;
        }


        createUser(email, password)

        .then(result => {
          console.log(result.user)

          e.target.reset()
          updateProfile(result.user, {
            
            displayName: name,
            photoURL: photo
          })
          .then( () =>{
           console.log("updated");
          })
          .catch(errrr =>{
            console.log(errrr)
          })
            console.log(result)
            setSuccessRegister('User registered successfully')
            
        })
        .catch(err => {
            console.log(err)
            setRegister(err.message)
        })
        
       
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200 dark:bg-black">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-black dark:text-white">
              <h1 className="text-4xl text-center font-bold">Register</h1>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered bg-gray-300"
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
                    className="input input-bordered bg-gray-300"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    name="photo"
                    type="text"
                    placeholder="photo URL"
                    className="input input-bordered bg-gray-300"
                    required
                  />
                </div>
                <p>
                  Already have an account?{" "}
                  <Link className="text-blue-700 underline" to="/login">
                    please Login
                  </Link>
                </p>
                {register && <p className="text-red-600">{register}</p>}
                {successRegister && (
                  <p className="text-green-600">{successRegister}</p>
                )}
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;