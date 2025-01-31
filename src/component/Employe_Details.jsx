import React, { useEffect, useState } from 'react'

function Employe_Details() {

    const [details,setDetails]=useState([])
    const[error,setError]=useState("")

   useEffect(()=>{

    async function fetchUser(){
     
    try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");

            if(!response.ok)
            {
                setError("Failed to fetch data");
            }
            const data=await response.json();
               console.log(data);
                setDetails(data);
               
     }
    catch(error)
    {
        console.log(error);

    }

   }   fetchUser();
}, []);
  
  
   

  return (

    <div className="bg-amber-100 max-w-md mx-auto p-4 shadow-md rounded-lg">
    <h2 className="text-center font-bold text-xl mb-4">Employee Details</h2>
    <ul className="space-y-3">
    {
      details.map((user)=>(
         <li key={user.id} className="p-3 bg-white rounded-lg shadow-md border">
            <p className="font-semibold">{user.name}</p>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </li>

      ))

    }
    </ul>
    </div>

  )
}

export default Employe_Details