import React, { useState } from 'react';
import { Award, Star } from 'lucide-react';

const challenges = [
  { id: 1, title: 'Recycle 10 items', description: 'Recycle 10 different items in one week', difficulty: 'Easy', points: 50 },
  { id: 2, title: 'Compost master', description: 'Start a compost bin and maintain it for a month', difficulty: 'Medium', points: 100 },
  { id: 3, title: 'Zero waste day', description: 'Go an entire day without producing any non-recyclable waste', difficulty: 'Hard', points: 200 },
];

const Challenges: React.FC = () => {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const handleCompleteChallenge = (id: number) => {
    if (!completedChallenges.includes(id)) {
      setCompletedChallenges([...completedChallenges, id]);
    }
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Challenges</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="card p-6 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <Award className="text-yellow-500" size={32} />
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">{challenge.title}</h2>
            <p className="mb-4 text-gray-600">{challenge.description}</p>
            <div className="flex justify-between items-center">
              <span className="flex items-center text-yellow-600">
                <Star className="mr-1" size={20} />
                {challenge.points} points
              </span>
              <button
                onClick={() => handleCompleteChallenge(challenge.id)}
                className={`btn ${
                  completedChallenges.includes(challenge.id)
                    ? 'bg-green-500 text-white'
                    : 'btn-secondary'
                }`}
                disabled={completedChallenges.includes(challenge.id)}
              >
                {completedChallenges.includes(challenge.id) ? 'Completed' : 'Complete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-green-100 text-green-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'hard':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default Challenges;