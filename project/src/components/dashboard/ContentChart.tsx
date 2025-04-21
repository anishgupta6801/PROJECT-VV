import React from 'react';
import { BarChart2 } from 'lucide-react';
import Card from '../ui/Card';
import { TimeSeriesData } from '../../types';

interface ContentChartProps {
  data: TimeSeriesData[];
  title: string;
  description?: string;
}

// This is a simplified chart component that mimics a chart visualization
// In a real application, you would use a chart library like Recharts, Chart.js, or D3
const ContentChart: React.FC<ContentChartProps> = ({ data, title, description }) => {
  // Group data by category
  const categories = [...new Set(data.map(item => item.category))];
  const dates = [...new Set(data.map(item => item.date))].sort();
  
  // Get a color for each category
  const getColor = (index: number) => {
    const colors = ['#3B82F6', '#F97316', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
    return colors[index % colors.length];
  };
  
  return (
    <Card 
      title={title}
      description={description}
      className="h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium text-slate-900">
          <BarChart2 className="h-5 w-5 inline mr-2 text-blue-500" />
          Content Moderation Trends
        </div>
      </div>
      
      {/* Chart placeholder - in a real app, use a proper chart library */}
      <div className="h-64 relative">
        <div className="absolute inset-0 flex items-end">
          {categories.map((category, categoryIndex) => (
            <div 
              key={category} 
              className="flex-1 flex items-end justify-around"
              style={{ height: '100%' }}
            >
              {dates.map((date, dateIndex) => {
                const dataPoint = data.find(d => d.category === category && d.date === date);
                const value = dataPoint ? dataPoint.value : 0;
                const maxValue = Math.max(...data.map(d => d.value));
                const height = value ? (value / maxValue) * 100 : 0;
                
                return (
                  <div 
                    key={`${category}-${date}`}
                    className="w-4 rounded-t-sm transition-all duration-300 hover:opacity-80"
                    style={{ 
                      height: `${height}%`, 
                      backgroundColor: getColor(categoryIndex),
                      opacity: 0.8,
                      marginLeft: dateIndex === 0 ? '8px' : '0',
                      marginRight: dateIndex === dates.length - 1 ? '8px' : '0'
                    }}
                    title={`${category}: ${value} on ${new Date(date).toLocaleDateString()}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs">
        {categories.map((category, index) => (
          <div key={category} className="flex items-center">
            <div 
              className="w-3 h-3 rounded-sm mr-1"
              style={{ backgroundColor: getColor(index) }}
            />
            <span>{category}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContentChart;