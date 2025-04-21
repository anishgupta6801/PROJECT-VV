import { ContentItem, ModerationType, ModeratedContent, AnalyticData, TimeSeriesData } from '../types';

// Moderation categories
export const moderationTypes: ModerationType[] = [
  {
    id: '1',
    name: 'Hate Speech',
    description: 'Content that promotes hatred or violence against groups based on attributes like race, religion, or gender',
    severity: 'critical',
    color: '#EF4444'
  },
  {
    id: '2',
    name: 'Harassment',
    description: 'Targeted insults, threats, or intimidation towards individuals',
    severity: 'high',
    color: '#F97316'
  },
  {
    id: '3',
    name: 'Violence',
    description: 'Content that depicts, glorifies, or incites violence',
    severity: 'high',
    color: '#F59E0B'
  },
  {
    id: '4',
    name: 'Self-harm',
    description: 'Content that promotes, encourages, or depicts self-harm behaviors',
    severity: 'critical',
    color: '#EC4899'
  },
  {
    id: '5',
    name: 'CSAM',
    description: 'Child sexual abuse material or child exploitation',
    severity: 'critical',
    color: '#7C3AED'
  },
  {
    id: '6',
    name: 'Misinformation',
    description: 'False or misleading information presented as fact',
    severity: 'medium',
    color: '#3B82F6'
  },
  {
    id: '7',
    name: 'Spam',
    description: 'Unsolicited, repeated content often for advertising or phishing',
    severity: 'low',
    color: '#10B981'
  }
];

// Moderated content for the review queue
export const moderatedContent: ModeratedContent[] = [
  {
    id: '1',
    content: 'I absolutely hate people who use this platform. They should all just leave.',
    flaggedPhrases: ['hate', 'should all just leave'],
    categories: [moderationTypes[1]],
    confidence: 0.89,
    timestamp: '2025-07-01T14:23:15Z',
    source: 'Twitter',
    status: 'flagged'
  },
  {
    id: '2',
    content: 'Check out these amazing deals on discount luxury items! Click here: fakelink.scam',
    flaggedPhrases: ['Check out', 'discount luxury', 'Click here', 'fakelink.scam'],
    categories: [moderationTypes[6]],
    confidence: 0.95,
    timestamp: '2025-07-01T14:12:45Z',
    source: 'Comments',
    status: 'flagged'
  },
  {
    id: '3',
    content: 'This article is completely false information designed to mislead the public about climate change.',
    flaggedPhrases: ['completely false', 'mislead'],
    categories: [moderationTypes[5]],
    confidence: 0.72,
    timestamp: '2025-07-01T13:58:30Z',
    source: 'Facebook',
    status: 'flagged'
  },
  {
    id: '4',
    content: 'If you disagree with me, I\'ll make sure you regret it. I know where you live.',
    flaggedPhrases: ['regret it', 'know where you live'],
    categories: [moderationTypes[1], moderationTypes[2]],
    confidence: 0.93,
    timestamp: '2025-07-01T13:45:20Z',
    source: 'Reddit',
    status: 'flagged'
  },
  {
    id: '5',
    content: 'The government is putting microchips in vaccines to track citizens. Wake up people!',
    flaggedPhrases: ['microchips in vaccines', 'track citizens', 'Wake up'],
    categories: [moderationTypes[5]],
    confidence: 0.84,
    timestamp: '2025-07-01T13:22:10Z',
    source: 'YouTube',
    status: 'flagged'
  },
  {
    id: '6',
    content: 'Let me tell you about my personal experience with this product. It worked as advertised!',
    flaggedPhrases: [],
    categories: [],
    confidence: 0.12,
    timestamp: '2025-07-01T13:10:45Z',
    source: 'Instagram',
    status: 'approved'
  }
];

// Analytics data
export const analyticData: AnalyticData[] = [
  {
    label: 'Content Processed',
    value: 25840,
    previousValue: 20150,
    change: 28.2,
    trend: 'up'
  },
  {
    label: 'Flagged Content',
    value: 4267,
    previousValue: 3912,
    change: 9.1,
    trend: 'up'
  },
  {
    label: 'False Positives',
    value: 215,
    previousValue: 283,
    change: -24.0,
    trend: 'down'
  },
  {
    label: 'Average Response Time',
    value: 1.2, // seconds
    previousValue: 1.8,
    change: -33.3,
    trend: 'down'
  }
];

// Time series data for charts
export const timeSeriesData: TimeSeriesData[] = [
  { date: '2025-06-01', value: 1243, category: 'Hate Speech' },
  { date: '2025-06-02', value: 1312, category: 'Hate Speech' },
  { date: '2025-06-03', value: 1280, category: 'Hate Speech' },
  { date: '2025-06-04', value: 1354, category: 'Hate Speech' },
  { date: '2025-06-05', value: 1402, category: 'Hate Speech' },
  { date: '2025-06-06', value: 1253, category: 'Hate Speech' },
  { date: '2025-06-07', value: 1193, category: 'Hate Speech' },
  
  { date: '2025-06-01', value: 845, category: 'Harassment' },
  { date: '2025-06-02', value: 932, category: 'Harassment' },
  { date: '2025-06-03', value: 901, category: 'Harassment' },
  { date: '2025-06-04', value: 934, category: 'Harassment' },
  { date: '2025-06-05', value: 1021, category: 'Harassment' },
  { date: '2025-06-06', value: 989, category: 'Harassment' },
  { date: '2025-06-07', value: 901, category: 'Harassment' },
  
  { date: '2025-06-01', value: 534, category: 'Violence' },
  { date: '2025-06-02', value: 602, category: 'Violence' },
  { date: '2025-06-03', value: 588, category: 'Violence' },
  { date: '2025-06-04', value: 623, category: 'Violence' },
  { date: '2025-06-05', value: 645, category: 'Violence' },
  { date: '2025-06-06', value: 612, category: 'Violence' },
  { date: '2025-06-07', value: 598, category: 'Violence' },
  
  { date: '2025-06-01', value: 356, category: 'Spam' },
  { date: '2025-06-02', value: 401, category: 'Spam' },
  { date: '2025-06-03', value: 387, category: 'Spam' },
  { date: '2025-06-04', value: 423, category: 'Spam' },
  { date: '2025-06-05', value: 456, category: 'Spam' },
  { date: '2025-06-06', value: 432, category: 'Spam' },
  { date: '2025-06-07', value: 412, category: 'Spam' },
];

// Platform Sources
export const platformSources = [
  { name: 'Twitter', percentage: 35 },
  { name: 'Facebook', percentage: 25 },
  { name: 'YouTube', percentage: 15 },
  { name: 'Reddit', percentage: 10 },
  { name: 'Instagram', percentage: 8 },
  { name: 'TikTok', percentage: 7 },
  { name: 'Other', percentage: 5 }
];