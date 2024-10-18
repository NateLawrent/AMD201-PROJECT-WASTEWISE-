import React from 'react';
import { Trash2, Recycle, Zap } from 'lucide-react';

const categories = [
  { name: 'Organic', icon: <Trash2 className="text-green-600" size={48} />, description: 'Food scraps, yard waste, and other biodegradable materials.' },
  { name: 'Recyclable', icon: <Recycle className="text-blue-600" size={48} />, description: 'Paper, cardboard, glass, metal, and certain plastics.' },
  { name: 'Hazardous', icon: <Zap className="text-red-600" size={48} />, description: 'Batteries, chemicals, and electronic waste.' },
];

const WasteCategories: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Waste Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.name} className="card p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">{category.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WasteCategories;