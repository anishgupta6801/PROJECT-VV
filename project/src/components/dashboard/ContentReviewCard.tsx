import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';
import { ModeratedContent } from '../../types';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

interface ContentReviewCardProps {
  content: ModeratedContent;
}

const ContentReviewCard: React.FC<ContentReviewCardProps> = ({ content }) => {
  const getBadgeVariant = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'danger';
      case 'high':
        return 'warning';
      case 'medium':
        return 'primary';
      case 'low':
        return 'secondary';
      default:
        return 'default';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(date);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="px-6 py-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
            <span className="text-sm font-medium text-slate-500">From {content.source}</span>
          </div>
          <span className="text-xs text-slate-500">{formatDate(content.timestamp)}</span>
        </div>
        
        <p className="text-slate-800 mb-3">{content.content}</p>
        
        <div className="mb-3">
          {content.flaggedPhrases.length > 0 && (
            <div className="mt-2">
              <span className="text-xs font-medium text-slate-500 block mb-1">Flagged phrases:</span>
              <div className="flex flex-wrap gap-1">
                {content.flaggedPhrases.map((phrase, index) => (
                  <span key={index} className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    "{phrase}"
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {content.categories.map((category) => (
            <Badge
              key={category.id}
              variant={getBadgeVariant(category.severity)}
              className="text-xs"
            >
              {category.name}
            </Badge>
          ))}
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            {(content.confidence * 100).toFixed(0)}% confidence
          </span>
        </div>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            icon={<X className="h-4 w-4" />}
            className="border-red-200 text-red-600 hover:bg-red-50"
          >
            Reject
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={<Check className="h-4 w-4" />}
            className="border-green-200 text-green-600 hover:bg-green-50"
          >
            Approve
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="ml-auto text-slate-600"
          >
            Review Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContentReviewCard;