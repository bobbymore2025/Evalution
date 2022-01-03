import React from "react";

const Form=({getdata})=>{
    const initialStage={title:"",ingredients:"",time:"",url:"",instruction:""};
    const [reciepe, setReciepe]=React.useState(initialStage);
    const handleSubmit=(e)=>{
          e.preventDefault();
          postdata(reciepe);
          getdata(reciepe);
         
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
    <form onSubmit={handleSubmit}  >
         <input type="text" onChange={handleChange} name="title" placeholder="reciepe name"/>
         <input type="text"onChange={handleChange} name="ingredients" placeholder="ingredients"/>
         <input type="text" onChange={handleChange} name="time"placeholder="time"/>
         <input type="text" onChange={handleChange} name="url"placeholder="url"/>
         <input type="text" onChange={handleChange} name="instructions"placeholder="instructions"/>
         <input type="submit"/>
    </form>

    
    
    </>


}
export default Form;