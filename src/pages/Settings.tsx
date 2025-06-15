
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, Bell, Landmark, Trash2, ChevronRight } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();

  const settingsItems = [
    { to: "/settings/security", icon: Lock, text: "Change Password" },
    { to: "/settings/notifications", icon: Bell, text: "Notification" },
    { to: "/settings/stripe-connect", icon: Landmark, text: "Stripe Connect" },
    { to: "/settings/delete-account", icon: Trash2, text: "Delete Account", isDestructive: true },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-bold ml-2">Settings</h1>
      </header>
      <main className="p-4">
        <div className="space-y-1">
          {settingsItems.map((item) => (
            <Link
              key={item.text}
              to={item.to}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                item.isDestructive
                  ? 'text-red-500 hover:bg-red-500/10'
                  : 'hover:bg-muted'
              }`}
            >
              <div className="flex items-center">
                <item.icon size={20} className="mr-4" />
                <span className="font-medium text-sm">{item.text}</span>
              </div>
              {!item.isDestructive && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Settings;
