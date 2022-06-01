import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {
  
  const[showSignUp, setShowSignUp] = useState(false);
  const toggleSignUp = ()=>{
  setShowSignUp(!showSignUp)
  }



  return (
    <div>
      <div className="container bg-light text-center ">
        <div className="row">
          <div className="col">
            <h3>Ecommerce</h3>
          </div>
        </div>
      </div>
      <div className="container bg-light text-center">
        <h2>Welcome to ECommerce</h2>
       
       {!showSignUp ? (<div style = {{width: 18 + "rem" }} className = 'bg-light  text-center'>
          <h3>Login Page</h3>
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control m-1 "
                placeholder="Enter Username"
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="form-control "
                placeholder="Enter Password"
              />
            </div>

            <div>
              <Link to= '/home'><input
                type="submit"
                className="btn btn-primary form-control m-1"
                value="LogIn As User"
               /></Link>
              
              </div>
              <div className="text-center ">
                <p className="text-info" onClick={() => toggleSignUp()}>Don't have an account? SignUp</p>
               
              </div>
          </form>
        </div>
):( <div style = {{width: 18 + "rem" }} className = 'bg-light '>
<h3>SignUp Page</h3>
<form>
  <div className="input-group">
    <input
      type="text"
      className="form-control m-1 "
      placeholder="Enter Username"
    />
  </div>
  <div className="input-group">
    <input
      type="password"
      className="form-control "
      placeholder="Enter Password"
    />
  </div>

  <div>
    <Link to = '/home'><input
      type="submit"
      className="btn btn-primary form-control m-1"
      value="SignUp As User"
    /></Link>
    
  </div>
  <div className="text-center"><p className="text-info" onClick={() => toggleSignUp() }>Already have an account? Login</p></div>
</form>
</div>
)}

</div>







</div>)}



        



export default Login;
