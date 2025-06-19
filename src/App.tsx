
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MobileLayout from "./components/layout/MobileLayout";
import Home from "./pages/Home";
import Portfolios from "./pages/Portfolios";
import Discover from "./pages/Discover";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Notifications from "./pages/Notifications";
import StockDetail from "./pages/StockDetail";
import CreatorProfile from "./pages/CreatorProfile";
import PublicProfile from "./pages/PublicProfile";
import SharpePlus from "./pages/SharpePlus";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import Earnings from "./pages/Earnings";
import Billing from "./pages/Billing";
import StripeConnect from "./pages/StripeConnect";
import NotificationSettings from "./pages/NotificationSettings";
import Referrals from "./pages/Referrals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/sharpe-plus" element={<SharpePlus />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/stripe-connect" element={<StripeConnect />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="*" element={
            <MobileLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolios" element={<Portfolios />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/activity" element={<Activity />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/stock/:symbol" element={<StockDetail />} />
                <Route path="/creator/:creatorId" element={<CreatorProfile />} />
                <Route path="/user/:username" element={<PublicProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MobileLayout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
