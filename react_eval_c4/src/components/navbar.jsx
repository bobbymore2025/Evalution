import React from "react"
import {Link} from "react-router-dom"
export const Navbar=()=>{
    return<>
      <div>
          <ul>
              <li>
                 <Link to="/Home">Home</Link>
              </li>
              <li>
              <Link to="/ClientLogin">ClientLogin</Link>  
              </li>
              <li>
              <Link to="/AdminLogin">Adminlogin</Link>
              </li>
              <li>
              <Link to="/Jobs">Jobs</Link> Jobs
              </li>
          </ul>
      </div>
    </>
}