import React, { useState, useEffect } from 'react';
import { Trophy, ArrowUp, ArrowDown } from 'lucide-react';

interface User {
  id: number;
  name: string;
  score: number;
  rank: number;
}

const ScoreBoard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const mockUsers: User[] = [
        { id: 1, name: 'Alice', score: 1200, rank: 1 },
        { id: 2, name: 'Bob', score: 1100, rank: 2 },
        { id: 3, name: 'Charlie', score: 1000, rank: 3 },
        { id: 4, name: 'David', score: 900, rank: 4 },
        { id: 5, name: 'Eve', score: 800, rank: 5 },
      ];
      setUsers(mockUsers);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Scoreboard</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading scoreboard...</p>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Rank</th>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {user.rank === 1 && <Trophy className="text-yellow-500 mr-2" size={20} />}
                      <span className={`font-semibold ${user.rank <= 3 ? 'text-green-600' : ''}`}>{user.rank}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-semibold">{user.score}</span>
                      {user.rank < 3 ? (
                        <ArrowUp className="text-green-500 ml-2" size={16} />
                      ) : user.rank > 3 ? (
                        <ArrowDown className="text-red-500 ml-2" size={16} />
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;