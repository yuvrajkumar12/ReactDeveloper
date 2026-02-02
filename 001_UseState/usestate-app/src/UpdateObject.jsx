import { useState } from "react";
function UpdateObject() {

    const initalState={
        name: '',
        Email: '',
        Password: '',
        Contact: ''
    }
  const [from, setform]=useState(initalState);
  const onNameChange =(e)=>{
    setform(e.target.value)
  }

  console.log(from);

  return (
    <>
    <div>
        <label>Name: </label>
        <input onChange={onNameChange} placeholder="Pless Enter your Name" />
    </div>

     <div>
        <label>Email: </label>
        <input onChange={onNameChange} placeholder="Pless Enter your Email Id" />
    </div>

     <div>
        <label>Password: </label>
        <input onChange={onNameChange} placeholder="Pless Enter your Password" />
    </div>



     <div>
        <label>Contact: </label>
        <input onChange={onNameChange} placeholder="Pless Enter your Contect" />
    </div>
    </>
  )
}

export default UpdateObject;
