import React from 'react';
import { Shield, BarChart2, AlertTriangle, Settings, Users, Book, FileText, Home } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  name: string;
  icon: React.ReactNode;
  current: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navigation: NavItem[] = [
    { name: 'Dashboard', icon: <Home className="h-5 w-5" />, current: true },
    { name: 'Content Moderation', icon: <Shield className="h-5 w-5" />, current: false },
    { name: 'Analytics', icon: <BarChart2 className="h-5 w-5" />, current: false },
    { name: 'Flagged Content', icon: <AlertTriangle className="h-5 w-5" />, current: false },
    { name: 'User Management', icon: <Users className="h-5 w-5" />, current: false },
    { name: 'Rules & Policies', icon: <FileText className="h-5 w-5" />, current: false },
    { name: 'API Documentation', icon: <Book className="h-5 w-5" />, current: false },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, current: false },
  ];

  return (
    <div
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:top-auto`}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 flex items-center px-6 border-b border-slate-700">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">ContentShield</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-5">
          <nav className="px-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`${
                  item.current
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors`}
              >
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-4 border-t border-slate-700">
          <div className="bg-slate-800 rounded-md p-3">
            <h3 className="text-sm font-medium text-white mb-2">ContentShield AI</h3>
            <p className="text-xs text-slate-400">
              Your AI-powered content moderation system is actively monitoring content.
            </p>
            <p className="text-xs text-slate-400 mt-1">
              System Health: <span className="text-green-400">Excellent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;