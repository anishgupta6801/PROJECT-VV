import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  className?: string;
  title?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  className = '',
  title,
}) => {
  const variantStyles = {
    info: {
      container: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    success: {
      container: 'bg-green-50 text-green-800 border-green-200',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    warning: {
      container: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: <AlertCircle className="h-5 w-5 text-amber-500" />,
    },
    error: {
      container: 'bg-red-50 text-red-800 border-red-200',
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
  };

  return (
    <div className={`flex p-4 rounded-md border ${variantStyles[variant].container} ${className}`}>
      <div className="flex-shrink-0 mr-3">{variantStyles[variant].icon}</div>
      <div>
        {title && <h3 className="font-medium mb-1">{title}</h3>}
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
};

export default Alert;