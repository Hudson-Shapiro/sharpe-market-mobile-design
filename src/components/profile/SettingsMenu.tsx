
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CreditCard, Settings, ChevronRight, Landmark, Bell, Users } from 'lucide-react';

const SettingsMenu = () => {
  const menuItems = [
    { to: "/earnings", icon: TrendingUp, text: "Earnings" },
    { to: "/billing", icon: CreditCard, text: "Billing" },
    { to: "/stripe-connect", icon: Landmark, text: "Stripe Connect" },
    { to: "/notification-settings", icon: Bell, text: "Notification Settings" },
    { 
      to: "/referrals", 
      icon: Users, 
      text: (
        <span>
          Refer friends and{' '}
          <span 
            style={{
              textShadow: '0 0 6px rgba(52, 211, 153, 0.5), 0 0 12px rgba(52, 211, 153, 0.2)'
            }}
            className="text-emerald-400"
          >
            earn
          </span>
        </span>
      )
    },
    { to: "/settings", icon: Settings, text: "More Settings" },
  ];

  return (
    <div className="px-4">
      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <Link
            key={typeof item.text === 'string' ? item.text : `item-${index}`}
            to={item.to}
            className="flex items-center justify-between p-3 transition-all duration-300 hover:bg-muted rounded-lg group"
          >
            <div className="flex items-center">
              <item.icon size={24} className="mr-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <span className="font-medium text-sm">{item.text}</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsMenu;
