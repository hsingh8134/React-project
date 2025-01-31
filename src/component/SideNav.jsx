import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed top-0 left-0 p-5">
      <h2 className="text-xl font-bold mb-6">Casino Menu</h2>
      <ul className="space-y-4">
        <li><Link to="/" className="block hover:text-yellow-400">🏠 Home</Link></li>
        <li><Link to="/favourites" className="block hover:text-yellow-400">⭐ Favourites</Link></li>
        <li><Link to="/latest" className="block hover:text-yellow-400">🔥 Latest Release</Link></li>
        <li><Link to="/live-casino" className="block hover:text-yellow-400">🎥 Live Casino</Link></li>
        <li><Link to="/slots" className="block hover:text-yellow-400">🎰 Slots</Link></li>
        <li><Link to="/bonus" className="block hover:text-yellow-400">🎁 Bonus</Link></li>
      </ul>
    </div>
  );
};

export default SideNav;