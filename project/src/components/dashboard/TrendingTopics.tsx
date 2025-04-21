import React from 'react';
import { TrendingUp } from 'lucide-react';
import Card from '../ui/Card';

// Simulated trending topics
const trendingTopics = [
  { id: 1, topic: 'Election misinformation', count: 543, trend: 'up', category: 'Misinformation' },
  { id: 2, topic: 'COVID vaccine claims', count: 324, trend: 'down', category: 'Misinformation' },
  { id: 3, topic: 'Celebrity death hoaxes', count: 256, trend: 'up', category: 'Misinformation' },
  { id: 4, topic: 'Racial slurs', count: 198, trend: 'up', category: 'Hate Speech' },
  { id: 5, topic: 'Investment scams', count: 167, trend: 'up', category: 'Spam' },
];

const TrendingTopics: React.FC = () => {
  return (
    <Card 
      title="Trending Topics"
      description="Currently trending topics requiring moderation attention"
    >
      <div className="space-y-4">
        {trendingTopics.map((topic) => (
          <div 
            key={topic.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center">
              <TrendingUp className={`h-5 w-5 mr-3 ${
                topic.trend === 'up' ? 'text-red-500' : 'text-green-500'
              }`} />
              <div>
                <div className="font-medium text-slate-900">{topic.topic}</div>
                <div className="text-xs text-slate-500">{topic.category}</div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium text-slate-700 mr-2">{topic.count}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded ${
                topic.trend === 'up' 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {topic.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrendingTopics;