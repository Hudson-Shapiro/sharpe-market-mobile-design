
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Activity } from '@/types';

/**
 * ActivityCard Component
 * 
 * Displays individual trading activity in a card format with visual indicators
 * for buy/sell actions and performance metrics.
 * 
 * Key Features:
 * - Visual buy/sell indicators with color coding
 * - Portfolio and stock information display
 * - Price and allocation details
 * - Responsive design for mobile-first experience
 * 
 * React Native Conversion Notes:
 * - Replace Card with custom View component
 * - Use TouchableOpacity for interactive elements
 * - Convert Tailwind classes to StyleSheet
 * - Use React Native's Text component for typography
 * 
 * Props:
 * @param activity - Activity object containing transaction details
 */

interface ActivityCardProps {
  /** Trading activity data */
  activity: Activity;
  /** Optional className for styling overrides */
  className?: string;
}

/**
 * ActivityCard Component Implementation
 */
const ActivityCard: React.FC<ActivityCardProps> = ({ activity, className = '' }) => {
  const isBuy = activity.type === 'BUY';
  
  return (
    <Card className={`p-4 bg-card border-border ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left side: Portfolio and stock info */}
        <div className="flex-1">
          {/* Portfolio name */}
          <p className="text-sm text-muted-foreground mb-1">
            {activity.portfolio.name}
          </p>
          
          {/* Stock and action */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">
              {activity.stock}
            </span>
            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
              isBuy 
                ? 'bg-emerald-500/20 text-emerald-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              {isBuy ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {activity.type}
            </div>
          </div>
          
          {/* Date and quantity */}
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <span>{activity.date}</span>
            <span>{activity.quantity} shares</span>
          </div>
        </div>
        
        {/* Right side: Price and allocation */}
        <div className="text-right">
          {/* Amount */}
          <p className="font-medium text-foreground">
            ${activity.amount.toLocaleString()}
          </p>
          
          {/* Price per share */}
          <p className="text-sm text-muted-foreground">
            @ ${activity.price.toFixed(2)}
          </p>
          
          {/* Allocation percentage */}
          <p className="text-xs text-muted-foreground mt-1">
            {activity.allocation.toFixed(1)}% allocation
          </p>
        </div>
      </div>
    </Card>
  );
};

// Add display name for debugging
ActivityCard.displayName = 'ActivityCard';

export default ActivityCard;

/**
 * React Native Implementation Example:
 * 
 * import React from 'react';
 * import { View, Text, StyleSheet } from 'react-native';
 * import { TrendingUp, TrendingDown } from 'react-native-vector-icons/Feather';
 * 
 * const ActivityCard = ({ activity }) => {
 *   const isBuy = activity.type === 'BUY';
 *   
 *   return (
 *     <View style={styles.card}>
 *       <View style={styles.container}>
 *         <View style={styles.leftSection}>
 *           <Text style={styles.portfolioName}>
 *             {activity.portfolio.name}
 *           </Text>
 *           
 *           <View style={styles.stockInfo}>
 *             <Text style={styles.stockSymbol}>{activity.stock}</Text>
 *             <View style={[styles.actionBadge, isBuy ? styles.buyBadge : styles.sellBadge]}>
 *               {isBuy ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
 *               <Text style={styles.actionText}>{activity.type}</Text>
 *             </View>
 *           </View>
 *           
 *           <View style={styles.details}>
 *             <Text style={styles.detailText}>{activity.date}</Text>
 *             <Text style={styles.detailText}>{activity.quantity} shares</Text>
 *           </View>
 *         </View>
 *         
 *         <View style={styles.rightSection}>
 *           <Text style={styles.amount}>
 *             ${activity.amount.toLocaleString()}
 *           </Text>
 *           <Text style={styles.price}>
 *             @ ${activity.price.toFixed(2)}
 *           </Text>
 *           <Text style={styles.allocation}>
 *             {activity.allocation.toFixed(1)}% allocation
 *           </Text>
 *         </View>
 *       </View>
 *     </View>
 *   );
 * };
 * 
 * const styles = StyleSheet.create({
 *   card: {
 *     backgroundColor: '#1a1a1a',
 *     borderRadius: 8,
 *     padding: 16,
 *     marginBottom: 8,
 *     borderWidth: 1,
 *     borderColor: '#333',
 *   },
 *   container: {
 *     flexDirection: 'row',
 *     justifyContent: 'space-between',
 *     alignItems: 'center',
 *   },
 *   leftSection: {
 *     flex: 1,
 *   },
 *   portfolioName: {
 *     color: '#888',
 *     fontSize: 14,
 *     marginBottom: 4,
 *   },
 *   stockInfo: {
 *     flexDirection: 'row',
 *     alignItems: 'center',
 *     gap: 8,
 *   },
 *   stockSymbol: {
 *     color: '#fff',
 *     fontSize: 16,
 *     fontWeight: '500',
 *   },
 *   actionBadge: {
 *     flexDirection: 'row',
 *     alignItems: 'center',
 *     paddingHorizontal: 8,
 *     paddingVertical: 4,
 *     borderRadius: 12,
 *     gap: 4,
 *   },
 *   buyBadge: {
 *     backgroundColor: 'rgba(16, 185, 129, 0.2)',
 *   },
 *   sellBadge: {
 *     backgroundColor: 'rgba(239, 68, 68, 0.2)',
 *   },
 *   actionText: {
 *     fontSize: 12,
 *     fontWeight: '500',
 *   },
 *   details: {
 *     flexDirection: 'row',
 *     gap: 16,
 *     marginTop: 8,
 *   },
 *   detailText: {
 *     color: '#888',
 *     fontSize: 14,
 *   },
 *   rightSection: {
 *     alignItems: 'flex-end',
 *   },
 *   amount: {
 *     color: '#fff',
 *     fontSize: 16,
 *     fontWeight: '500',
 *   },
 *   price: {
 *     color: '#888',
 *     fontSize: 14,
 *   },
 *   allocation: {
 *     color: '#888',
 *     fontSize: 12,
 *     marginTop: 4,
 *   },
 * });
 * 
 * export default ActivityCard;
 */
