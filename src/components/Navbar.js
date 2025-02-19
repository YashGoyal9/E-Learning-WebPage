import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
    let isloggedIn=props.isloggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;



    return(
        <div className="flex sm:flex-row   flex-col justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            
          <div>
          <Link to="/">
           <img src={logo} alt="logo" width={160} height={32} loading="lazy"/>
           </Link>
          </div>

           <div className="flex sm:flex-row  flex-col items-center gap-[50px] pt-4">
           <nav>
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    <li>
                        <Link to="/"> About</Link>
                    </li>
                    <li>
                        <Link to="/"> Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login, signup,logout,dashboard */}

            <div className="flex text-richblack-100 items-center gap-x-4">
                
            { !isloggedIn &&
                <Link to="/login">
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">
                Log in
                </button>
            </Link>
            }

           { !isloggedIn &&

             <Link to="/signup" >
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">
                Sign up
                </button>
            </Link>
           }

            { isloggedIn &&
                <Link to="/" >
                <button onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out successfully")
                }}
                className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 "
                >
                Logout
                </button>
            </Link>
            }

            { isloggedIn &&
                <Link to="/dashboard">
                <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 ">
                Dashboard
                </button>
            </Link>

            }

            </div>
           </div>



        </div>
    )
}

export default Navbar;
