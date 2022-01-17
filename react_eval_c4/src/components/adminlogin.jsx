import React from "react";
import {useDispatch}from "react-redux"
import {addjob} from "../stores/actions"

export const AdminLogin=()=>{
   const init={company_name:"", title:"", salary:"", description:"", location:"", type:""}
  
    const [job,setJob]=React.useState([init]);
    const dispatch = useDispatch();

    const handlechange= (e) => {
        let { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };
  
    return<>
    <h1> Create New Job</h1>
    <div>
        
        <input type="text" name="company_name" placeholder="Enter Company Name" onChange={handlechange}/>
        <input type="text" name="title" placeholder="Job Title" onChange={handlechange}/>
        <input type="text" name="salary" placeholder="Salary" onChange={handlechange}/>
        <input type="text" name="discription" placeholder="Job Discription" onChange={handlechange}/>
        <input type="text" name="location" placeholder="Location" onChange={handlechange}/>
        <input type="text" name="type" placeholder="Type" onChange={handlechange}/>
        <button onClick={()=>{
             dispatch(addjob(job));
    //      fetch("http://localhost:3001/Jobs",{
    //      method:"POST",
    //      body:JSON.stringify({job}),
    //      header:{
    //     "Content-Type":"application/json"
    //     }
     
    // }) .then((d)=>d.json())
    //    .then((res)=>{
          
       //})
}}>Post Job</button>
    </div>
    </>
}