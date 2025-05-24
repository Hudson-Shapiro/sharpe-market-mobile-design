
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Lock, Settings, Bell, FileText, HelpCircle, MessageSquare, Info, ChevronRight, TrendingUp, CreditCard } from 'lucide-react';

const SettingsMenu = () => {
  return (
    <div className="px-4">
      {/* Seller Items Section */}
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">Seller Items</h3>
        <div className="space-y-1">
          <Link to="/earnings" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
            <div className="flex items-center">
              <TrendingUp size={16} className="text-emerald-400 mr-3 transition-colors duration-300" />
              <span className="font-medium text-sm">View Earnings</span>
            </div>
            <div className="flex items-center">
              <span className="text-muted-foreground mr-2 text-xs">$2,487.50</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </Link>
          
          <Link to="/settings/withdrawal" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
            <div className="flex items-center">
              <CreditCard size={16} className="text-blue-400 mr-3 transition-colors duration-300" />
              <span className="font-medium text-sm">Withdrawal Methods</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border/50 pt-3 mb-3"></div>
      
      <div className="space-y-1">
        <Link to="/settings/security" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <Lock size={16} className="text-purple-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Security</span>
          </div>
          <div className="flex items-center">
            <span className="text-muted-foreground mr-2 text-xs">Setup 2FA</span>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </div>
        </Link>
        
        <Link to="/settings/preferences" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <Settings size={16} className="text-gray-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Preferences</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/notifications" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <Bell size={16} className="text-amber-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Notifications</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/settings/payment" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <DollarSign size={16} className="text-emerald-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Payment Methods</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
      
      <div className="border-t border-border/50 pt-3 mt-4 mb-3"></div>
      
      <div className="space-y-1">
        <Link to="/documents" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <FileText size={16} className="text-gray-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Documents</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/support" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <HelpCircle size={16} className="text-blue-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Help & Support</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/feedback" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <MessageSquare size={16} className="text-purple-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">Send Feedback</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
        
        <Link to="/about" className="flex items-center justify-between p-2.5 rounded-lg transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25 active:bg-emerald-500/30 active:shadow-md active:shadow-emerald-500/30">
          <div className="flex items-center">
            <Info size={16} className="text-gray-400 mr-3 transition-colors duration-300" />
            <span className="font-medium text-sm">About</span>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
};

export default SettingsMenu;
