
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Lock, Settings, Bell, FileText, HelpCircle, MessageSquare, Info, ChevronRight } from 'lucide-react';

const SettingsMenu = () => {
  return (
    <div className="px-4">
      <div className="border-t border-border/50 pt-3 mb-3"></div>
      
      <div className="space-y-1">
        <Link to="/settings/security" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <Lock size={16} className="text-purple-400 mr-3" />
            <span className="font-medium text-sm">Security</span>
          </div>
          <div className="flex items-center">
            <span className="text-muted-foreground mr-2 text-xs">Setup 2FA</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </Link>
        
        <Link to="/settings/preferences" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <Settings size={16} className="text-gray-400 mr-3" />
            <span className="font-medium text-sm">Preferences</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/notifications" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <Bell size={16} className="text-amber-400 mr-3" />
            <span className="font-medium text-sm">Notifications</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/payment" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <DollarSign size={16} className="text-emerald-400 mr-3" />
            <span className="font-medium text-sm">Payment Methods</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/deposit" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-400 mr-3">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            <span className="font-medium text-sm">Deposit Methods</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
      
      <div className="border-t border-border/50 pt-3 mt-4 mb-3"></div>
      
      <div className="space-y-1">
        <Link to="/documents" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <FileText size={16} className="text-gray-400 mr-3" />
            <span className="font-medium text-sm">Documents</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/support" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <HelpCircle size={16} className="text-blue-400 mr-3" />
            <span className="font-medium text-sm">Help & Support</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/feedback" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <MessageSquare size={16} className="text-purple-400 mr-3" />
            <span className="font-medium text-sm">Send Feedback</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/about" className="flex items-center justify-between p-2.5 rounded-lg bg-gray-900/30 hover:bg-gray-900/50 transition-colors">
          <div className="flex items-center">
            <Info size={16} className="text-gray-400 mr-3" />
            <span className="font-medium text-sm">About</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
};

export default SettingsMenu;
