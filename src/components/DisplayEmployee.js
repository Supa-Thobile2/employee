import React from "react"

function DisplayEmployee(props){
    return(
        <div className="display">
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