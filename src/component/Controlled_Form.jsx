import React, { useState } from 'react'

function Controlled_Form() {

    const [name,setName]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const [password, setPassword] = useState("");


   function validatePassword(password)
   {  
    const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ ;

      return passwordRegex.test(password);

   }

    const handleSubmit=(e)=>{

        if(!validatePassword(password))
        {
          alert("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
        }  
        else{ 
        e.preventDefault();
        console.log("form submitted",{name,username,email,password});

        }
    };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-lg ">
       <h2 className="text-2xl font-bold text-center mb-4">User Registration</h2>
    
    <form onSubmit={handleSubmit}  className="space-y-4 ">
       
        <div>

            <label className="block text-gray-700 font-medium mb-1" htmlFor='name'>Name: </label>
            <input  required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder=' name please' id='name' type='text'  onChange={(e)=>setName(e.target.value)} value={name}></input>

        </div>

        <div>

            <label  className="block text-gray-700 font-medium mb-1" htmlFor='email'>Email:</label>
            <input required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
             placeholder=" abc@gmail.com" id='email' type='email'  onChange={(e)=>setEmail(e.target.value)} value={email}></input>

        </div>

        <div>

            <label  className="block text-gray-700 font-medium mb-1" htmlFor='userName'>User name: </label>
            <input  required placeholder=" enter your Username" id='userName' type='text' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"   onChange={(e)=>setUsername(e.target.value)} value={username}></input>

        </div>

        <div>

        <label  className="block text-gray-700 font-medium mb-1" htmlFor='password'>Password: </label>
         <input  required className="w-full px-3 py-2 border border-gray-300 rounded-lg  focus:outline-none"
          placeholder=" enter strong password " id='password' type='password'   onChange={(e)=>setPassword(e.target.value)} value={password}></input>
 
        </div>  

<br></br>

<button type='submit' className=" w-30 px-3 py-2 bg-gray-300 hover:bg-blue-700 transition  border border-gray-300 rounded-lg" >Register</button>

</form>
  
  </div>
  )
}

export default Controlled_Form