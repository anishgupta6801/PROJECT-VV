import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { AnalyticData } from '../../types';
import Card from '../ui/Card';

interface StatCardProps {
  data: AnalyticData;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ data, className = '' }) => {
  const formatValue = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const renderTrendIcon = () => {
    if (data.trend === 'up') {
      return <ArrowUpRight className="h-4 w-4 text-emerald-500" />;
    }
    if (data.trend === 'down') {
      const isPositive = data.label.includes('Time') || data.label.includes('False');
      return <ArrowDownRight className={`h-4 w-4 ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`} />;
    }
    return <Minus className="h-4 w-4 text-slate-400" />;
  };

  const getTrendColor = () => {
    if (!data.trend) return 'text-slate-500';
    
    if (data.trend === 'up') {
      // For metrics where "up" is good (most cases)
      if (data.label.includes('Time') || data.label.includes('False')) {
        return 'text-rose-500';
      }
      return 'text-emerald-500';
    }
    
    if (data.trend === 'down') {
      // For metrics where "down" is good
      if (data.label.includes('Time') || data.label.includes('False')) {
        return 'text-emerald-500';
      }
      return 'text-rose-500';
    }
    
    return 'text-slate-500';
  };

  return (
    <Card className={`${className}`}>
      <div className="flex flex-col">
        <div className="text-sm font-medium text-slate-500">{data.label}</div>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-semibold text-slate-900">
            {data.label.includes('Time') ? `${data.value}s` : formatValue(data.value)}
          </span>
          
          {data.change !== undefined && (
            <span className={`ml-2 flex items-center text-sm ${getTrendColor()}`}>
              {renderTrendIcon()}
              <span className="ml-1">{Math.abs(data.change).toFixed(1)}%</span>
            </span>
          )}
        </div>
        
        <div className="mt-2 text-xs text-slate-500">
          Compared to previous period
        </div>
      </div>
    </Card>
  );
};

export default StatCard;