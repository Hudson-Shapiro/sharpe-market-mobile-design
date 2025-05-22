
import React from 'react';
import { LogOut } from 'lucide-react';

const SignOutSection = () => {
  return (
    <>
      <button className="w-full mt-8 mb-10 flex items-center justify-center space-x-2 py-4 px-4 rounded-lg transition-colors bg-gray-800 hover:bg-gray-700 text-white">
        <LogOut size={18} className="mr-2" />
        <span className="font-medium">Sign Out</span>
      </button>
      
      <div className="pt-2 pb-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-foreground transition-colors">Disclaimer</a>
      </div>
    </>
  );
};

export default SignOutSection;
