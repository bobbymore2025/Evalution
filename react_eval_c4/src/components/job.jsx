import React from "react";
import {useSelector,useDispatch}from "react-redux"
import Joblist from "./joblist"
export const Jobs=()=>{
  
    const data = useSelector(state=>state.Jobs);
   
  
    return<>
        <h1>Listed jobs</h1>
        {data.map((e)=><Joblist {...e} />)}

        </>

}