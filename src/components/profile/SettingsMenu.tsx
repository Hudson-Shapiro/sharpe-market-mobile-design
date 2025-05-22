
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Lock, Settings, Bell, Smartphone, FileText, HelpCircle, MessageSquare, Info, ChevronRight } from 'lucide-react';

const SettingsMenu = () => {
  return (
    <div className="px-4">
      <h2 className="text-lg font-bold mb-3">Settings</h2>
      <div className="space-y-2">
        <Link to="/settings/payment" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <DollarSign size={20} className="text-emerald-400" />
            </div>
            <span className="font-medium">Payment methods</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/deposit" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-400">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <span className="font-medium">Deposit methods</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>

        <Link to="/settings/security" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <Lock size={20} className="text-purple-400" />
            </div>
            <span className="font-medium">Security</span>
          </div>
          <div className="flex items-center">
            <span className="text-muted-foreground mr-2 text-sm">Setup 2FA</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </Link>
        
        <Link to="/settings/preferences" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <Settings size={20} className="text-gray-400" />
            </div>
            <span className="font-medium">Preferences</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/notifications" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <Bell size={20} className="text-amber-400" />
            </div>
            <span className="font-medium">Notifications</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/devices" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <Smartphone size={20} className="text-green-400" />
            </div>
            <span className="font-medium">Device management</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
      </div>
      
      <h2 className="text-lg font-bold mt-8 mb-3">More</h2>
      <div className="space-y-2">
        <Link to="/documents" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <FileText size={20} className="text-gray-400" />
            </div>
            <span className="font-medium">Documents</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/support" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <HelpCircle size={20} className="text-blue-400" />
            </div>
            <span className="font-medium">Support</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/feedback" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <MessageSquare size={20} className="text-purple-400" />
            </div>
            <span className="font-medium">Send Feedback</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
        
        <Link to="/about" className="flex items-center justify-between p-3.5 rounded-lg bg-gray-900/30">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gray-800">
              <Info size={20} className="text-gray-400" />
            </div>
            <span className="font-medium">About</span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
};

export default SettingsMenu;
