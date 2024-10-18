import React, { useState } from 'react';
import { Search } from 'lucide-react';

const wasteItems = [
  { name: 'Banana peel', category: 'Organic', instructions: 'Compost or dispose in organic waste bin.' },
  { name: 'Plastic bottle', category: 'Recyclable', instructions: 'Rinse and place in recycling bin.' },
  { name: 'Battery', category: 'Hazardous', instructions: 'Take to a designated battery recycling point.' },
  // Add more items as needed
];

const WasteItems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<typeof wasteItems[0] | null>(null);

  const filteredItems = wasteItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold mb-8 text-green-600">Waste Items</h1>
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search for a waste item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
        <Search className="absolute left-3 top-3 text-gray-400" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Search Results</h2>
          {filteredItems.length > 0 ? (
            <ul className="card divide-y divide-gray-200">
              {filteredItems.map((item) => (
                <li
                  key={item.name}
                  className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                  onClick={() => setSelectedItem(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No items found. Try a different search term.</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Item Details</h2>
          {selectedItem ? (
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3 text-green-600">{selectedItem.name}</h3>
              <p className="mb-2"><strong className="text-gray-700">Category:</strong> <span className="text-gray-600">{selectedItem.category}</span></p>
              <p><strong className="text-gray-700">Instructions:</strong> <span className="text-gray-600">{selectedItem.instructions}</span></p>
            </div>
          ) : (
            <p className="text-gray-600">Select an item to see details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WasteItems;