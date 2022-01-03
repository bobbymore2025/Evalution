import React from "react";

 const Reciepes= ({data})=>{
 const {title,time,ingredients,url,instructions} =data;
     return<> 
    
        <div>
        <h3 >{title}</h3>
        <p>{ingredients}</p>
        <p>{time}</p>
         <img src={url}/>
        <p>{instructions}</p>
       
        </div>
        </>

 }
 export default Reciepes;