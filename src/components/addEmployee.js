
import React,{useState} from 'react'

import '../css/addEmployee.css'
function AddEmployee(props){
    let btn={
        marginTop: '20px',
        padding: '0.9%',
        backgroundColor: 'green',
        borderRadius: '5px'
    }

     const [firstName,setfirstName] = useState('')
     const [lastName, setlastName] = useState('')
     const [email, setemail] = useState('')
    
     const add = (()=>{

        console.log(firstName)
        console.log(lastName)
        console.log(email)

        props.add (firstName,lastName,email)
     });


    return(
        <div className="container">
            <h3>New Employee</h3>
            <label type="text" id="fname">First Name:</label><br/>
            <input type="text" id="fname" onChange={(e)=> setfirstName(e.target.value)}/><br/><br/>

            <label type="text" id="lname">Last Name:</label><br/>
            <input type="text" id="lname" onChange={(e)=> setlastName(e.target.value)}/><br/><br/>

            <label type="text" id="email">Email:</label><br/>
            <input type="text" id="email" onChange={(e)=> setemail(e.target.value)}/><br/>


            <button style={btn} onClick={add}>Add Employee</button>



        </div>
    )
}

export default AddEmployee