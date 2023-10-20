import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(() =>{
      console.log('logged out successfully')
    })
    .catch(err =>{
      console.log(err)
    })
  }
    const links = (
      <>
        <li className="font-tilt">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/addProduct">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="/myCart">My Cart</NavLink>
        </li>
        <li>
          {user ? (
            <NavLink> 
              
              <button onClick={handleLogOut}>Sign Out</button>
            </NavLink>
          ) : (
            <NavLink to="login">
              <button>Log in</button>
            </NavLink>
          )}
        </li>
      </>
    );
    return (
      <div className="font-tilt">
        <div className="navbar  flex justify-between bg-gray-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn  lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            <div className="ml-5 flex items-center w-20">
              <img
                src="https://i.ibb.co/vZ8b1k5/vector-illustration-sports-car-logo-template-cool-luxurious-elegant-vector-illustration-sports-car-l.png"
                alt=""
              />
              <a className="btn btn-ghost normal-case text-xl">Automotive</a>
            </div>
          </div>
          {user ? (
            <div className="gap-3">
              {user.displayName}
              <img className="w-14 rounded-[50%]" src={user.photoURL} alt="" />
            </div>
          ) : (
            ""
          )}
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
      </div>
    );
};

export default Nav;