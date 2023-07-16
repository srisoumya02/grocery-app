import { Link,useNavigate } from "react-router-dom";
import React,{useState,useEffect} from "react";


const Navbar = () => {
    const navigate=useNavigate();
    const [loginStatus, setLoginStatus]=useState(false);

    useEffect(()=>{
        let token=localStorage.getItem("token");
        if(!token){
            setLoginStatus(false);
        }else{
            setLoginStatus(true);
        }
    },[loginStatus]);
    const onLogoutHandler=()=>{
        localStorage.clear();
        setLoginStatus(false);
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Grocery App
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/aboutus" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/contactus" className="nav-link">Contact Us <span className="sr-only">(current)</span></Link>
                    </li>
                    
                </ul>
                <form className="form-inline my-2 my-lg-0" style={{gap:'20px'}}>
                    
                    { loginStatus ? (
                    <Link className="btn btn-danger" onClick={onLogoutHandler}>Logout</Link>
                    ):(
                        <>
                        <Link className="btn btn-primary my-2 my-sm-0" to="/login">Login</Link>
                        <Link to="/register" className="btn btn-primary my-2 my-sm-0">Register</Link>
                        </>
                        
                    )
                }
                </form>
            </div>
        </nav>
    )
}

export default Navbar;