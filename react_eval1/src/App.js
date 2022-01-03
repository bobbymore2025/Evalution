import logo from './logo.svg';
import './App.css';
import Form from "./components/form"
import ReciepesDetails from "./components/reciepe"
function App() {
  const [data,setData]=React.useState({});
  const handledata=(data)=>{
    setData(data);
    console.log(data);
  }
  return (
  <div className="App">
    <Form getdata={handledata}/>
    <ReciepesDetails data={data} />
    </div>
  );
}

export default App;
