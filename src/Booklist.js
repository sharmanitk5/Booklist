import React, { useEffect, useState } from 'react'
import Data from './Data';

export default function() {
    const[title,setTitle] = useState("");
    const[author,setAuthor] = useState("");
    const[Isbn,setIsbn] = useState("");
    const[cid,setId] = useState("");
    const[main,setMain] = useState([
      {
             maintitle:"book",
            mainauthor:"Sachin Sharma",
            mainIsbn:214232761872,
            mainid:"123"
}])
   
function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

    let addfunction = ()=>{
      setMain([...main,{
        maintitle:title,
        mainauthor:author,
        mainIsbn:Isbn,
        mainid:create_UUID()
      }])

    }
    let Deletefunction = (maintitle)=>{
      setMain(main.filter(x=>x.maintitle!==maintitle))

    }
    let editButton =(x)=>{
    setId(x.mainid)
    setTitle(x.maintitle)
    setAuthor(x.main)
    setIsbn(x.mainIsbn)

    }


//         fetch("http://localhost:3001/thoughts",{method:"POST",headers:{
//             "Content-Type":"application/json"
//         },body:JSON.stringify(data)})

//         .then(res=>res.json())
//         .then(response=>{
//             let newArray = response.filter(x=>x.maintitle && x.mainauthor)
//             setMain(newArray)})
//      }
// useEffect(()=>{
//     newFunction()
// },[])
//     let newFunction = ()=>{

//         fetch("http://localhost:3001/thoughts")
//         .then(res=>res.json())
//         .then(response=>{
//             let newArray = response.filter(x=>x.maintitle && x.mainauthor)
//             setMain(newArray)})
   
let cancel =()=>{

  setId("")
  setId("")
    setTitle("")
    setAuthor("")
    setIsbn("")
  
}

// let update =(x)=>{
//  if(x.mainid==cid){
// setMain(main.map ((x)=>x.maintitle=title,x.mainauthor=author,x.mainIsbn=Isbn))

// }

// }
  return (
    <div>
    <form>
   <label>Title</label>
   <div><input value={title} onChange={(e)=>setTitle(e.target.value)}></input></div>
   <label>Author</label>
   <div><input value={author} onChange={(e)=>setAuthor(e.target.value)}></input></div>
   <label>ISBN#</label>
   <div><input value={Isbn} onChange={(e)=>setIsbn(e.target.value)}></input></div>
   <button type="button" onClick={addfunction}>{cid=== "" ? "Add":"Update"}</button>
     {cid!== ""&& <button onClick={cancel}>Cancel</button>}
   <table className="change">
   <tbody>
    <tr>
     <th>Title</th>
     <th>Author</th>
     <th>ISBN#</th>
     <th>Settings</th>
   </tr>
  {
    main.map((x)=><Data datatitle={x.maintitle} dataauthor={x.mainauthor} dataisbn={x.mainIsbn} Deletefunc = {()=>Deletefunction(x.maintitle)} edit={()=>editButton(x)}></Data>)
    // main.map((x)=><span>Test</span>)
  }
   </tbody>
   </table>
   {/* <Data datatitle={title} dataauthor={author} dataisbn={Isbn}></Data> */}

 
   
   {/* <i class="fa-regular fa-pen-to-square"></i> */}
   {/* <i class="fa-sharp fa-solid fa-trash"></i> */}

</form>
    </div>
  );
}
