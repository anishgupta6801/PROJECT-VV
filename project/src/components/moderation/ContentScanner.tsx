import React, { useState } from 'react';
import { Search, Shield, X } from 'lucide-react';
import Button from '../ui/Button';
import Alert from '../ui/Alert';
import { moderationTypes } from '../../data/mockData';

const ContentScanner: React.FC = () => {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<null | {
    isSafe: boolean;
    flaggedCategories: typeof moderationTypes;
    flaggedContent: string[];
    confidence: number;
  }>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis with a timeout
    setTimeout(() => {
      const containsHarmfulContent = 
        content.toLowerCase().includes('hate') || 
        content.toLowerCase().includes('spam') || 
        content.toLowerCase().includes('kill') ||
        content.toLowerCase().includes('terrible');
      
      if (containsHarmfulContent) {
        const lowercaseContent = content.toLowerCase();
        const flaggedCategories = [];
        const flaggedContent = [];
        
        if (lowercaseContent.includes('hate') || lowercaseContent.includes('terrible')) {
          flaggedCategories.push(moderationTypes[0]); // Hate Speech
          flaggedContent.push('hate', 'terrible');
        }
        
        if (lowercaseContent.includes('kill')) {
          flaggedCategories.push(moderationTypes[2]); // Violence
          flaggedContent.push('kill');
        }
        
        if (lowercaseContent.includes('spam')) {
          flaggedCategories.push(moderationTypes[6]); // Spam
          flaggedContent.push('spam');
        }
        
        setResults({
          isSafe: false,
          flaggedCategories,
          flaggedContent: [...new Set(flaggedContent)],
          confidence: 0.89
        });
      } else {
        setResults({
          isSafe: true,
          flaggedCategories: [],
          flaggedContent: [],
          confidence: 0.95
        });
      }
      
      setIsAnalyzing(false);
    }, 1500);
  };

  const resetScan = () => {
    setResults(null);
    setContent('');
  };

  return (
    <div className="bg-white shadow-sm rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2" />
          <h2 className="text-lg font-semibold text-slate-900">Content Scanner</h2>
        </div>
        <p className="mt-1 text-sm text-slate-500">
          Analyze content for potentially harmful material using our AI-powered scanner.
        </p>
      </div>

      <div className="p-6">
        {!results ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="content-input" className="block text-sm font-medium text-slate-700 mb-1">
                Paste or type content to analyze
              </label>
              <textarea
                id="content-input"
                rows={6}
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter content to scan for harmful material..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isAnalyzing}
              />
            </div>
            
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                disabled={!content.trim() || isAnalyzing}
                className="flex items-center"
              >
                {isAnalyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Scan Content
                  </>
                )}
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {results.isSafe ? (
              <Alert
                variant="success"
                title="Content Appears Safe"
              >
                Our AI analysis detected no harmful content in the submitted text.
                <div className="mt-1 text-xs">
                  Confidence: {(results.confidence * 100).toFixed(0)}%
                </div>
              </Alert>
            ) : (
              <>
                <Alert
                  variant="error"
                  title="Potentially Harmful Content Detected"
                >
                  Our AI analysis flagged this content as potentially harmful.
                  <div className="mt-1 text-xs">
                    Confidence: {(results.confidence * 100).toFixed(0)}%
                  </div>
                </Alert>
                
                <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                  <h3 className="text-sm font-medium text-slate-900 mb-2">
                    Detected Categories:
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {results.flaggedCategories.map((category) => (
                      <span
                        key={category.id}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${category.color}25`, color: category.color }}
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-sm font-medium text-slate-900 mb-2">
                    Flagged Content:
                  </h3>
                  <div className="p-3 bg-white rounded border border-slate-200 text-sm">
                    {content.split(' ').map((word, index) => {
                      const lowercaseWord = word.toLowerCase().replace(/[.,!?]/g, '');
                      const isFlagged = results.flaggedContent.some(
                        term => lowercaseWord.includes(term)
                      );
                      
                      return (
                        <span 
                          key={index}
                          className={`${
                            isFlagged ? 'bg-red-100 text-red-800 px-1 rounded' : ''
                          }`}
                        >
                          {word}{' '}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            
            <div className="flex justify-between items-center pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={resetScan}
                icon={<X className="h-4 w-4" />}
              >
                Reset
              </Button>
              
              <Button
                variant={results.isSafe ? 'outline' : 'primary'}
                size="sm"
              >
                {results.isSafe ? 'Save Report' : 'Review Details'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentScanner;