import React from "react"
const Joblist=({company_name, title, salary, description, location, type})=>{



  
  return<><div id="output">
    <span>{company_name}</span>
    <span>{title}</span>
    <span>{ salary}</span>
    <span>{description}</span>
    <span>{location}</span>
    <span>{ type}</span>
  </div>
  </>
}
export default Joblist;