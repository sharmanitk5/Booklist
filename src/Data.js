import React from 'react'

export default function Data({datatitle,dataauthor,dataisbn,Deletefunc,edit}) {


  
  return (
    <tr>

   <td> {datatitle} </td>
   <td> {dataauthor}</td>
     <td>{dataisbn}</td>
     <td>
    <i className="fa-regular fa-pen-to-square" style={{margin:5}} onClick={edit}></i> 
    <i className="fa-sharp fa-solid fa-trash" onClick={Deletefunc}></i>
</td>
     

    </tr>
  )
}
