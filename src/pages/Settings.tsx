
```tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Lock, Bell, Landmark, Trash2, ChevronRight } from 'lucide-react';

const Settings = () => {
  const navigate = useNavigate();

  const settingSections = [
    {
      title: "Account",
      items: [
        { to: "/settings/security", icon: Lock, text: "Change Password" },
        { to: "/settings/stripe-connect", icon: Landmark, text: "Stripe Connect" },
      ]
    },
    {
      title: "Application",
      items: [
        { to: "/settings/notifications", icon: Bell, text: "Notification Settings" },
      ]
    },
    {
      title: "Danger Zone",
      items: [
        { to: "/settings/delete-account", icon: Trash2, text: "Delete Account", isDestructive: true },
      ]
    }
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
        <div className="space-y-6">
          {settingSections.map((section) => (
            <div key={section.title}>
              <h3 className="px-4 mb-2 text-sm font-semibold text-muted-foreground">{section.title}</h3>
              <div className="bg-card rounded-lg border">
                {section.items.map((item, index) => (
                  <Link
                    key={item.text}
                    to={item.to}
                    className={`flex items-center justify-between p-4 ${ index > 0 ? 'border-t' : '' } transition-colors ${
                      item.isDestructive
                        ? 'text-red-500 hover:bg-red-500/10'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon size={20} className={`mr-4 ${item.isDestructive ? 'text-red-500' : 'text-muted-foreground'}`} />
                      <span className="font-medium text-sm">{item.text}</span>
                    </div>
                    {!item.isDestructive && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Settings;
```
