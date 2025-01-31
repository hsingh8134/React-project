import React from 'react'
import { FaInstagram, FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";

function Footer(props) {
  return (
    <div className='bg-gray-900 w-full'>
      
      <div className="max-w-7xl mx-auto p-6">

    <div className='p-2'>
      <img src="https://cdn-ilcimaj.nitrocdn.com/GTjtvzbibdykcGydBetzmwDFYjoWfdwp/assets/images/optimized/rev-5e44c2a/www.trueigtech.com/wp-content/uploads/2024/06/ITech_White.png" className="h-12" 
      alt="Logo"></img>
      </div>

<ul className='flex text-white justify-between '>
    <ul>
      <li>Casino</li>
      <div className=" text-gray-400">
      <li>casino games</li>
      <li>slots</li>
      <li>live casino</li>
      <li>Roulette</li>
      <li>Blackjack</li>
      </div>
    </ul>

    <ul>
      <li>Sports</li>
      <div className=" text-gray-400">
      <li>Sportsbook</li>
      <li>Live sports</li>
      <li>Soccer</li>
      <li>Basketball</li>
      <li>eSport</li>
    </div>
    </ul>

    <ul>
      <li>Support</li>
      <div className=" text-gray-400">
      <li>Help Center</li>
      <li>Live Support</li>
      <li>Contact us</li>
      </div>
    </ul>

      <div className="h-20 flex items-center justify-center space-x-4">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="h-8 w-8 text-pink-500 hover:text-pink-600" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="h-8 w-8 text-blue-500 hover:text-blue-600" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-8 w-8 text-gray-700 hover:text-black" />
      </a>
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <FaDiscord className="h-8 w-8 text-indigo-500 hover:text-indigo-600" />
      </a>
    </div>

</ul>

<div className=' flex flex-col items-center justify-center text-white p-4 m-10'>
  <h1>{props.email}</h1>
  <h2>©️{props.name}</h2>
</div>


</div>  
    </div>
  )
}

export default Footer