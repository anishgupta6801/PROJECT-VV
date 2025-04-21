import React from 'react';
import { Shield, Users, BarChart2, Clock } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatCard from '../components/dashboard/StatCard';
import ContentReviewCard from '../components/dashboard/ContentReviewCard';
import ContentChart from '../components/dashboard/ContentChart';
import TrendingTopics from '../components/dashboard/TrendingTopics';
import ContentScanner from '../components/moderation/ContentScanner';
import { analyticData, timeSeriesData, moderatedContent } from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Content Moderation Dashboard</h1>
        <p className="text-slate-500">
          Monitor and manage content across all your platforms in real-time.
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {analyticData.map((stat, index) => (
          <StatCard key={index} data={stat} />
        ))}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Analytics Chart */}
          <ContentChart 
            data={timeSeriesData}
            title="Content Moderation Trends"
            description="Content flagged by category over time"
          />
          
          {/* Content for Review */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-900">Content for Review</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
            
            <div className="space-y-4">
              {moderatedContent
                .filter(content => content.status === 'flagged')
                .slice(0, 3)
                .map(content => (
                  <ContentReviewCard key={content.id} content={content} />
                ))
              }
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-8">
          {/* Content Scanner */}
          <ContentScanner />
          
          {/* Trending Topics */}
          <TrendingTopics />
          
          {/* Quick Actions */}
          <Card title="Quick Actions">
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="flex items-center justify-center py-6"
              >
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 mb-2 text-blue-500" />
                  <span className="text-xs font-medium">Moderation Rules</span>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center justify-center py-6"
              >
                <div className="flex flex-col items-center">
                  <Users className="h-6 w-6 mb-2 text-blue-500" />
                  <span className="text-xs font-medium">User Reports</span>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center justify-center py-6"
              >
                <div className="flex flex-col items-center">
                  <BarChart2 className="h-6 w-6 mb-2 text-blue-500" />
                  <span className="text-xs font-medium">Analytics</span>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="flex items-center justify-center py-6"
              >
                <div className="flex flex-col items-center">
                  <Clock className="h-6 w-6 mb-2 text-blue-500" />
                  <span className="text-xs font-medium">Activity Log</span>
                </div>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;