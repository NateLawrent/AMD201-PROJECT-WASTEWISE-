import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle, Info, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center animate-fadeIn">
      <h1 className="text-4xl font-bold mb-6 text-green-600">Welcome to WasteWise</h1>
      <p className="text-xl mb-12 text-gray-600">Learn how to sort waste and make a difference!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          to="/categories"
          icon={<Recycle className="text-green-500" size={48} />}
          title="Waste Categories"
          description="Explore different types of waste and how to sort them."
        />
        <FeatureCard
          to="/items"
          icon={<Info className="text-blue-500" size={48} />}
          title="Waste Items"
          description="Search for specific items and learn how to dispose of them properly."
        />
        <FeatureCard
          to="/challenges"
          icon={<Award className="text-yellow-500" size={48} />}
          title="Challenges"
          description="Take on educational challenges and earn points!"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ to: string; icon: React.ReactNode; title: string; description: string }> = ({
  to,
  icon,
  title,
  description,
}) => (
  <Link to={to} className="card p-6 hover:transform hover:scale-105 transition-all duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;