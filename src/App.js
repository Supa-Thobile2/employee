

import './App.css';

import AddEmployee from './components/addEmployee';
// import DisplayEmployee from './components/DisplayEmployee';
import { useState } from 'react';

function App() {
  
  const [employee, setEmployee] = useState([])

  const addEmployee = ((firstName,lastName,email)=>{

    setEmployee((employee)=>[...employee,{
      firstName:firstName,
      lastName:lastName,
      email:email
    }])
    console.log(addEmployee)
  })
  
  return (
    <div>
    {/* <DisplayEmployee table={props.table}/> */}
    <AddEmployee add={addEmployee}/>
 
    </div>
   ); 
}

export default App;
