import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [value,setValue] = useState('')
  const [baza,setBaza] = useState([])
  const[baza1,setBaza1]=useState([])
  const[nolike,setnoLike] =useState(0)
  const[like,setLike] =useState(0)
  function Select(){
    let b =[]
    for(let m of baza){
      m.check=true
      b.push(m)
    }
    console.log(b)
    setBaza(b)
  
  
  }
  function Delet(){
     let k = baza.filter(e=>e.check===false)
    console.log(k)
    setBaza(k)
   
  }


  function f(){
    if(value===''){
      return alert('please enter the text')
    }
      let avel = {
          value,
          check:false
      }

      setBaza([...baza,avel])
      setValue('')
      
     
  }
 
  
  useEffect(()=>{
    
   
    setnoLike(baza.length)
    setLike( baza.filter(e=>e.check===true).length)
     
  },[baza])
  function delet(index){
      const k = baza.filter((e,i)=>i!==index)
      setBaza(k)

  }
  function x(index){

      for(let i = 0;i<baza.length;i++){
          if(i===index){
             baza[i].check=!baza[i].check
          }
      
          setBaza1([...baza1,baza[i]])
      }
     
      setLike( baza.filter(e=>e.check===true).length)
  
      setBaza1([])
      
      
      
   
  }
  return (
    
    <div className="App">
       <h1>MY TO DO LIST</h1>
      <div  className="Todo">
       
          <div className="Todo_1"  >
            <input  value = {value}  onChange={(e)=>{setValue(e.target.value)}} type="text"  onKeyDown={(event)=>{
                 if(event.keyCode===13){
                     return f()}}} placeholder="Tipe hirr..." />
            <button  onClick={()=>f()} >add</button>
          <div>
         
            {baza.map((e,index)=>(
              <div  key={index} className="baza"  >
                <div onClick={()=>x(index)}  className="baza1">
                    {e.check?
                    <svg xmlns="http://www.w3.org/2000/svg"  style={{color:'green'}} width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                  </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app" viewBox="0 0 16 16">
  <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"/>
</svg>}
                    <b>{e.value}</b>
                </div>
                <button  className="remov" onClick={()=>delet(index)} >Remove</button>
              </div>)
             )}
        
          
              <div   className="batns" >
              <b>{like} / {nolike}</b>
              <button  className="Sel" onClick={()=>Select()}  >Select all</button>
               
                
               
                <button className="del"  onClick={Delet} >Delete all Completed</button>

              </div>
            </div>
        </div>
     
      </div>
        
    
    </div>
  );
}

export default App;
