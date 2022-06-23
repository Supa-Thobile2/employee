import React from "react"
import '../css/displayEmployee.css'

function DisplayEmployee(props){
    
    return(
        <div className="display">
            <h1>Employee List</h1>
            {props.table.map((employee)=>(
                     <table>
                     <tr>
                         <td>{employee.firstName}</td>
                     </tr>
                     <tr>
                         <td>{employee.lastName}</td>
                     </tr>
                     <tr>
                         <td>{employee.email}</td>
                     </tr>
                     
                 </table>
            ))}
           

        </div>
    )
}

export default DisplayEmployee