import React from "react";

import ReciepesDetails from "./reciepe"
const Form=({getData})=>{
    const initialStage={title:"",ingredients:"",time:"",url:"",instruction:""};
    const [reciepe, setReciepe]=React.useState(initialStage);
    const handleSubmit=(e)=>{
          e.preventDefault();
          postdata(reciepe);
          getData(reciepe);
         
      }
   const  handleChange=(e)=>{
          e.preventDefault();
          const {name,value}=e.target;
          setReciepe({...reciepe,[name]:value})
        
      }
      const postdata=(data)=>{
         
          fetch(`http://localhost:3000/recepies`,{
              method:"POST",
              body:JSON.stringify(data),
              header:{
                  "Content-Type":"application/json"
              }
              
          })
          .then((res)=>res.json())
          .then((res)=>{getdata(res)})
      }
      const getdata=()=>{
          fetch(`http://localhost:3000/recepies`)
          .then((res)=>res.json())
          .then((res)=>{console.log(res);
            setReciepe(res);

          })
            


      }
  
  
    return<>
    <div id="display">
    <div>
    <form onSubmit={handleSubmit}  >
         <input type="text" onChange={handleChange} name="title" placeholder="reciepe name"/>
         <input type="text"onChange={handleChange} name="ingredients" placeholder="ingredients"/>
         <input type="text" onChange={handleChange} name="time"placeholder="time"/>
         <input type="text" onChange={handleChange} name="url"placeholder="url"/>
         <input type="text" onChange={handleChange} name="instructions"placeholder="instructions"/>
         <input  type="submit"/>
    </form>
    </div>
    <div>
    <ReciepesDetails data={reciepe} />
    </div>
    </div>
    </>


}
export default Form;