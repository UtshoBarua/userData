import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import data from './data/data.json'
import Details from './component/Details';
function App() {
  const [user,setUser]= useState([])
  const [income,setIncome] = useState(0)
  const handleAddIncome =()=>{
    const newIncome = {...income}
    const annualNumber2 = parseFloat(user.annual)
    const netIncome = newIncome + annualNumber2;
    setIncome(netIncome)
  }
  

  useEffect(()=>{
      setUser(data)
      },[])
  console.log(user)
 
  return (
    <div className="App">
      <header className="App-header">
        <h3>Total annual income of the whole employee:{income} </h3>
      <ul>
          {user.map(user=> <Details user={user} handleAddIncome={handleAddIncome} ></Details> )}
      </ul>
      </header>
    </div>
  );
}

export default App;
