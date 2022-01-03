import React from "react";
import Reciepes from "./reciepedetail";
 const ReciepesDetails= ({data})=>{
const[rec,setRec]=React.useState([]);
  const {title,time,ingredients,url,instructions} =data;
  const handleClick=(rec)=>{
      setRec(rec)
  }
     return<> 
        
        <div>
        <h3 >{title}</h3>
        <h3>{time}</h3>
        <button onClick={ handleClick }>show details</button>
        </div>
        <Reciepes data={data} />
        </>
        

 }
 export default ReciepesDetails;