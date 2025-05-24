
import React from 'react';
import { LogOut } from 'lucide-react';

const SignOutSection = () => {
  return (
    <>
      <div className="border-t border-border/50 pt-4 mt-4"></div>
      
      <button className="w-full mt-4 mb-6 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-colors bg-gray-800 hover:bg-gray-700 text-white">
        <LogOut size={16} className="mr-2" />
        <span className="font-medium text-sm">Sign Out</span>
      </button>
      
      <div className="pt-2 pb-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
      </div>
    </>
  );
};

export default SignOutSection;
