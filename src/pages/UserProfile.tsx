import React, { useState } from 'react';
import { User, Mail, Key } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', score: 0 });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUser({ name: 'John Doe', email: 'john@example.com', score: 150 });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUser({ name: 'New User', email: 'new@example.com', score: 0 });
  };

  if (isLoggedIn) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-green-600">User Profile</h2>
        <div className="mb-4 flex items-center">
          <User className="mr-3 text-gray-500" />
          <span className="font-semibold text-gray-700">Name:</span> <span className="ml-2">{user.name}</span>
        </div>
        <div className="mb-4 flex items-center">
          <Mail className="mr-3 text-gray-500" />
          <span className="font-semibold text-gray-700">Email:</span> <span className="ml-2">{user.email}</span>
        </div>
        <div className="mb-6 flex items-center">
          <Award className="mr-3 text-yellow-500" />
          <span className="font-semibold text-gray-700">Waste Sorting Score:</span> <span className="ml-2 text-green-600 font-bold">{user.score}</span>
        </div>
        <button
          onClick={() => setIsLoggedIn(false)}
          className="btn btn-primary w-full"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6 text-green-600">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="loginEmail" className="block mb-2 text-gray-700">Email</label>
            <input type="email" id="loginEmail" className="input" required />
          </div>
          <div className="mb-6">
            <label htmlFor="loginPassword" className="block mb-2 text-gray-700">Password</label>
            <input type="password" id="loginPassword" className="input" required />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
      <div className="card p-8">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="registerName" className="block mb-2 text-gray-700">Name</label>
            <input type="text" id="registerName" className="input" required />
          </div>
          <div className="mb-4">
            <label htmlFor="registerEmail" className="block mb-2 text-gray-700">Email</label>
            <input type="email" id="registerEmail" className="input" required />
          </div>
          <div className="mb-6">
            <label htmlFor="registerPassword" className="block mb-2 text-gray-700">Password</label>
            <input type="password" id="registerPassword" className="input" required />
          </div>
          <button type="submit" className="btn btn-secondary w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;