// Type definitions for the application

export interface ContentItem {
  id: string;
  content: string;
  source: string;
  timestamp: string;
  status: 'flagged' | 'approved' | 'rejected' | 'pending';
  confidence: number;
  category?: string;
  subcategory?: string;
}

export interface ModerationType {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  color: string;
}

export interface ModeratedContent {
  id: string;
  content: string;
  flaggedPhrases: string[];
  categories: ModerationType[];
  confidence: number;
  timestamp: string;
  source: string;
  status: 'flagged' | 'approved' | 'rejected' | 'pending';
}

export interface AnalyticData {
  label: string;
  value: number;
  previousValue?: number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
}

export interface TimeSeriesData {
  date: string;
  value: number;
  category?: string;
}

export interface ModerationType {
  id: string;
  name: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  color: string;
}