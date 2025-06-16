
import React from 'react';
import { Lock, Sparkles, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MiniChart from '@/components/discover/MiniChart';
import type { ChartConfig } from '@/types';

/**
 * PreSubscriptionScreen Component
 * 
 * Premium feature preview and subscription conversion screen for Sharpe+.
 * This component is designed to showcase the value proposition of premium
 * features while maintaining an engaging and mobile-optimized experience.
 * 
 * Key Features:
 * - Hero section with clear value proposition
 * - Interactive data previews (blurred with overlay)
 * - Feature highlights with visual indicators
 * - Mobile-optimized sticky CTA button
 * - Gradient backgrounds and visual effects
 * - Real teaser data to show actual value
 * 
 * React Native Conversion Notes:
 * - Replace gradient backgrounds with LinearGradient component
 * - Convert fixed/sticky positioning to absolute positioning
 * - Use Animated.View for blur effects and overlays
 * - Replace ScrollArea with ScrollView
 * - Use SafeAreaView for proper device handling
 * - Convert Tailwind blur to react-native-blur components
 * - Implement haptic feedback for button interactions
 * 
 * Design Principles:
 * - Mobile-first responsive design
 * - High contrast for accessibility
 * - Clear visual hierarchy
 * - Compelling call-to-action placement
 * - Data visualization to demonstrate value
 * 
 * Conversion Strategy:
 * - Social proof through teaser data
 * - Feature comparison highlighting
 * - Urgency through limited-time messaging
 * - Clear pricing and value communication
 */

/**
 * Mock teaser data for holdings preview
 * Shows real market data to demonstrate value
 * In production, this would be live data from API
 */
interface TeaserHolding {
  ticker: string;
  portfolios: string;
  avg: string;
  change: string;
  trend: 'up' | 'down';
}

const TEASER_HOLDINGS: TeaserHolding[] = [
  { ticker: 'NVDA', portfolios: '78.4%', avg: '12.3%', change: '+5.2%', trend: 'up' },
  { ticker: 'AAPL', portfolios: '72.1%', avg: '8.7%', change: '-2.1%', trend: 'down' },
  { ticker: 'MSFT', portfolios: '68.9%', avg: '9.4%', change: '+3.7%', trend: 'up' },
  { ticker: 'TSLA', portfolios: '55.2%', avg: '6.8%', change: '-4.3%', trend: 'down' },
];

/**
 * Mock teaser data for sector allocation preview
 */
interface TeaserSector {
  name: string;
  portfolios: string;
  avg: string;
  change: string;
  trend: 'up' | 'down';
}

const TEASER_SECTORS: TeaserSector[] = [
  { name: 'Technology', portfolios: '42.3%', avg: '28.7%', change: '+2.4%', trend: 'up' },
  { name: 'Healthcare', portfolios: '15.8%', avg: '12.1%', change: '-0.8%', trend: 'down' },
  { name: 'Financial', portfolios: '12.4%', avg: '9.6%', change: '+1.2%', trend: 'up' },
];

/**
 * Key metrics that users get access to
 * Used for feature highlighting
 */
interface KeyMetric {
  label: string;
  desc: string;
  color: string;
}

const KEY_METRICS: KeyMetric[] = [
  { 
    label: 'Avg Allocation %', 
    desc: 'Average allocation across portfolios', 
    color: 'text-blue-400' 
  },
  { 
    label: '% of Portfolios', 
    desc: 'Percentage of portfolios holding', 
    color: 'text-emerald-400' 
  },
  { 
    label: 'Day Change %', 
    desc: 'Daily allocation change', 
    color: 'text-purple-400' 
  },
];

/**
 * Feature benefits for Sharpe+ subscription
 */
interface FeatureBenefit {
  icon: string;
  text: string;
}

const FEATURE_BENEFITS: FeatureBenefit[] = [
  { icon: '📊', text: 'Detailed allocation percentages' },
  { icon: '🔄', text: 'Daily allocation change tracking' },
  { icon: '📈', text: 'Portfolio penetration metrics' },
  { icon: '⚡', text: 'Real-time sector rotations' },
];

/**
 * PreSubscriptionScreen Component Implementation
 */
const PreSubscriptionScreen: React.FC = () => {
  /**
   * Generate sample sparkline data for charts
   * In production, this would be real market data
   */
  const generateSparklineData = (): number[] => {
    return Array.from({ length: 7 }, () => Math.random() * 40 + 20);
  };

  /**
   * Handle subscription button click
   * In production, this would integrate with payment system
   */
  const handleSubscribe = () => {
    // Implementation would handle Stripe/payment integration
    console.log('Starting subscription flow...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900/30 via-emerald-800/20 to-emerald-700/30 relative overflow-hidden">
      {/* 
        Background Glow Effects
        Creates visual depth and premium feel
        RN Conversion: Use multiple absolutely positioned Views with blur
      */}
      <div className="absolute top-20 left-4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* 
        Main Content Container
        Scrollable content with proper spacing for mobile
        RN Conversion: ScrollView with contentContainerStyle
      */}
      <div className="relative z-10 p-4 max-w-md mx-auto pb-28">
        {/* 
          Hero Section
          Clear value proposition and branding
          RN Conversion: View with centered content
        */}
        <div className="text-center mb-6 pt-16">
          {/* Brand icon with gradient background */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <div className="text-2xl">📊</div>
          </div>
          
          {/* Main headline with gradient text */}
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Unlock Sharpe+
          </h1>
          
          {/* Value proposition subtitle */}
          <p className="text-muted-foreground mb-6">
            See how investors are allocating capital — with detailed metrics.
          </p>
        </div>

        {/* 
          Key Metrics Preview Section
          Shows what users will get access to
          RN Conversion: Grid layout with styled containers
        */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            📊 Get These Key Metrics
          </h2>
          
          {/* Metrics grid with responsive layout */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {KEY_METRICS.map((metric, i) => (
              <div 
                key={i} 
                className="p-2 bg-card/30 border border-border/20" 
                style={{ borderRadius: '8px' }}
              >
                <div className={`text-xs font-bold ${metric.color} mb-1`}>
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground leading-tight">
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Data Preview Section
          Shows actual data behind blur/lock overlay
          RN Conversion: Absolutely positioned overlay on data
        */}
        <div className="mb-6">
          <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
            🔥 What You're Missing
          </h2>
          
          {/* Top Holdings Preview with lock overlay */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            {/* Lock overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <div className="text-center">
                <Lock size={20} className="text-emerald-400 animate-pulse mx-auto mb-2" />
                <p className="text-xs text-emerald-400 font-medium">Live Data</p>
              </div>
            </div>
            
            {/* Blurred content underneath */}
            <div className="p-3 blur-[2px]">
              <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
                📈 Top Holdings Analysis
              </h3>
              
              {/* Data table header */}
              <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground font-medium mb-2 px-1">
                <div>Stock</div>
                <div className="text-center">% Portfolios</div>
                <div className="text-center">Avg Alloc %</div>
                <div className="text-center">Day Change</div>
              </div>
              
              {/* Data rows */}
              <div className="space-y-1.5">
                {TEASER_HOLDINGS.map((holding, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs bg-background/20 p-2 rounded-lg">
                    <span className="font-bold">{holding.ticker}</span>
                    <span className="text-center font-medium">{holding.portfolios}</span>
                    <span className="text-center text-blue-400 font-medium">{holding.avg}</span>
                    <span className={`text-center font-medium ${holding.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {holding.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Sectors Preview with lock overlay */}
          <div className="bg-card/50 border border-border backdrop-blur-sm relative overflow-hidden mb-3" style={{ borderRadius: '12px' }}>
            {/* Lock overlay */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10" style={{ borderRadius: '12px' }}>
              <div className="text-center">
                <Lock size={20} className="text-emerald-400 animate-pulse mx-auto mb-2" />
                <p className="text-xs text-emerald-400 font-medium">Live Data</p>
              </div>
            </div>
            
            {/* Blurred content underneath */}
            <div className="p-3 blur-[2px]">
              <h3 className="font-medium text-sm mb-2">🔄 Sector Allocation Trends</h3>
              
              {/* Data table header */}
              <div className="grid grid-cols-4 gap-2 text-xs text-muted-foreground font-medium mb-2 px-1">
                <div>Sector</div>
                <div className="text-center">% Portfolios</div>
                <div className="text-center">Avg Alloc %</div>
                <div className="text-center">Day Change</div>
              </div>
              
              {/* Data rows */}
              <div className="space-y-1.5">
                {TEASER_SECTORS.map((sector, i) => (
                  <div key={i} className="grid grid-cols-4 gap-2 items-center text-xs bg-background/20 p-2 rounded-lg">
                    <span className="font-medium truncate">{sector.name}</span>
                    <span className="text-center font-medium">{sector.portfolios}</span>
                    <span className="text-center text-blue-400 font-medium">{sector.avg}</span>
                    <span className={`text-center font-medium ${sector.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {sector.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call-to-action message */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <Lock size={12} className="text-emerald-400" />
              See detailed allocation metrics with Sharpe+
            </p>
          </div>
        </div>

        {/* 
          Feature Benefits Section
          Grid of key features users will get
          RN Conversion: Grid layout with icons and text
        */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-center mb-4">What You Get</h2>
          <div className="grid grid-cols-2 gap-2">
            {FEATURE_BENEFITS.map((feature, i) => (
              <div 
                key={i} 
                className="p-3 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors" 
                style={{ borderRadius: '12px' }}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">{feature.icon}</div>
                  <span className="text-xs font-medium">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 
          Premium Badge Section
          Reinforces premium positioning
          RN Conversion: Styled container with gradient background
        */}
        <div className="bg-gradient-to-r from-purple-500/20 to-emerald-500/20 border border-purple-500/30 p-3 mb-6 relative overflow-hidden" style={{ borderRadius: '12px' }}>
          {/* Sparkle animation */}
          <div className="absolute top-2 right-2">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
          </div>
          
          <h3 className="font-bold text-sm mb-1 flex items-center gap-2">
            🧠 Sharpe+ Analytics
          </h3>
          <p className="text-xs text-muted-foreground">
            Advanced portfolio allocation insights & trends
          </p>
        </div>
      </div>

      {/* 
        Fixed Footer CTA
        Improved sticky subscription button that blends with the UI
        RN Conversion: Absolutely positioned View at bottom
      */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background/95 to-transparent backdrop-blur-sm">
        <div className="p-4 max-w-md mx-auto">
          <Button 
            size="lg" 
            onClick={handleSubscribe}
            className="w-full bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-500 hover:to-purple-500 text-white py-4 text-lg font-bold shadow-xl border-0 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            style={{ borderRadius: '12px' }}
          >
            🔓 Subscribe Now — $9.99/month
          </Button>
        </div>
      </div>
    </div>
  );
};

// Add display name for debugging
PreSubscriptionScreen.displayName = 'PreSubscriptionScreen';

export default PreSubscriptionScreen;

/**
 * React Native Conversion Example:
 * 
 * import React from 'react';
 * import {
 *   View,
 *   Text,
 *   ScrollView,
 *   TouchableOpacity,
 *   StyleSheet,
 *   SafeAreaView,
 * } from 'react-native';
 * import LinearGradient from 'react-native-linear-gradient';
 * import { BlurView } from '@react-native-blur/blur';
 * 
 * const PreSubscriptionScreen = ({ navigation }) => {
 *   const handleSubscribe = () => {
 *     // Navigate to subscription flow
 *     navigation.navigate('Subscription');
 *   };
 * 
 *   return (
 *     <SafeAreaView style={styles.container}>
 *       <LinearGradient
 *         colors={['rgba(16, 185, 129, 0.3)', 'rgba(16, 185, 129, 0.2)']}
 *         style={styles.gradient}
 *       >
 *         <ScrollView
 *           style={styles.scrollView}
 *           contentContainerStyle={styles.contentContainer}
 *         >
 *           // Hero Section
 *           <View style={styles.heroSection}>
 *             <View style={styles.iconContainer}>
 *               <Text style={styles.icon}>📊</Text>
 *             </View>
 *             <Text style={styles.title}>Unlock Sharpe+</Text>
 *             <Text style={styles.subtitle}>
 *               See how investors are allocating capital — with detailed metrics.
 *             </Text>
 *           </View>
 * 
 *           // Feature previews with blur overlay
 *           <View style={styles.previewSection}>
 *             <BlurView style={styles.blurOverlay} blurType="dark">
 *               <Text style={styles.lockText}>🔒 Live Data</Text>
 *             </BlurView>
 *             // Data content here
 *           </View>
 *         </ScrollView>
 * 
 *         // Fixed CTA Button
 *         <View style={styles.ctaContainer}>
 *           <TouchableOpacity
 *             style={styles.ctaButton}
 *             onPress={handleSubscribe}
 *             activeOpacity={0.8}
 *           >
 *             <LinearGradient
 *               colors={['#059669', '#7c3aed']}
 *               style={styles.buttonGradient}
 *             >
 *               <Text style={styles.buttonText}>
 *                 🔓 Subscribe Now — $9.99/month
 *               </Text>
 *             </LinearGradient>
 *           </TouchableOpacity>
 *         </View>
 *       </LinearGradient>
 *     </SafeAreaView>
 *   );
 * };
 * 
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     backgroundColor: '#0a0a0a',
 *   },
 *   gradient: {
 *     flex: 1,
 *   },
 *   scrollView: {
 *     flex: 1,
 *   },
 *   contentContainer: {
 *     padding: 16,
 *     paddingBottom: 100,
 *   },
 *   heroSection: {
 *     alignItems: 'center',
 *     marginBottom: 24,
 *     paddingTop: 64,
 *   },
 *   iconContainer: {
 *     width: 64,
 *     height: 64,
 *     borderRadius: 16,
 *     backgroundColor: 'rgba(16, 185, 129, 0.2)',
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *     marginBottom: 16,
 *   },
 *   icon: {
 *     fontSize: 24,
 *   },
 *   title: {
 *     fontSize: 32,
 *     fontWeight: 'bold',
 *     color: '#10b981',
 *     marginBottom: 8,
 *     textAlign: 'center',
 *   },
 *   subtitle: {
 *     fontSize: 16,
 *     color: '#737373',
 *     textAlign: 'center',
 *     marginBottom: 24,
 *   },
 *   ctaContainer: {
 *     position: 'absolute',
 *     bottom: 0,
 *     left: 0,
 *     right: 0,
 *     padding: 16,
 *     backgroundColor: '#0a0a0a',
 *     borderTopWidth: 1,
 *     borderTopColor: 'rgba(38, 38, 38, 0.2)',
 *   },
 *   ctaButton: {
 *     borderRadius: 12,
 *     overflow: 'hidden',
 *   },
 *   buttonGradient: {
 *     paddingVertical: 16,
 *     alignItems: 'center',
 *   },
 *   buttonText: {
 *     color: 'white',
 *     fontSize: 18,
 *     fontWeight: 'bold',
 *   },
 * });
 */
