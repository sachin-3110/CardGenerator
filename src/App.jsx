import React, { useState } from "react";
import Cards from "./Components/Cards";
import Form from "./Components/Form"
function App() {
   const[users,setUsers]=useState([ ])

  const handleSubmitFunction=(data)=>{
    setUsers([...users, data]);
  }
  const handleRemove=(id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }
  return (
    <div className="sm:h-auto md:w-full h-[150vh] flex flex-col justify-center items-center">
      <div className="">
      <Cards className="" handleRemove={handleRemove} users={users}/>
      <Form handleSubmitFunction={handleSubmitFunction}/>
      </div>
    </div>
  );
}

export default App;
