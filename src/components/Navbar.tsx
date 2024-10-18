import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, User, List, Search, Award, BarChart2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold flex items-center text-green-600">
            <Recycle className="mr-2" /> WasteWise
          </Link>
          <ul className="flex space-x-6">
            <NavItem to="/profile" icon={<User size={18} />} text="Profile" />
            <NavItem to="/categories" icon={<List size={18} />} text="Categories" />
            <NavItem to="/items" icon={<Search size={18} />} text="Items" />
            <NavItem to="/challenges" icon={<Award size={18} />} text="Challenges" />
            <NavItem to="/scoreboard" icon={<BarChart2 size={18} />} text="Scoreboard" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; text: string }> = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="flex items-center text-gray-600 hover:text-green-600 transition-colors duration-300">
      {icon}
      <span className="ml-1">{text}</span>
    </Link>
  </li>
);

export default Navbar;