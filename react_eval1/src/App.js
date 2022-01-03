import logo from './logo.svg';
import './App.css';
import React from "react"
import Form from "./components/form"

import Reciepe from "./components/reciepedetail"
function App() {
  const [data,setData]=React.useState({});
  const handledata=(data)=>{
    setData(data);
    console.log(data);
  }
  return (
  <div className="App">
    <Form />
   
    </div>
  );
}

export default App;
