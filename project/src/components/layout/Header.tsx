import React from 'react';
import { Shield, Bell, Menu, X, User } from 'lucide-react';
import Button from '../ui/Button';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center ml-4 lg:ml-0">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">ContentShield</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
            
            <div className="border-l border-slate-200 h-6 mx-2"></div>
            
            <div className="flex items-center">
              <div className="hidden md:block mr-2">
                <div className="text-sm font-medium text-slate-700">Admin User</div>
                <div className="text-xs text-slate-500">admin@contentshield.ai</div>
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                <User className="h-5 w-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;