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
  const sign = isBuy ? '+' : '-';
  const amountColor = isBuy ? 'text-emerald-400' : 'text-red-400';
  const cardBg = isBuy ? 'bg-emerald-500/10' : 'bg-red-500/10';
  const iconBg = isBuy ? 'bg-emerald-500/20' : 'bg-red-500/20';
  const iconColor = isBuy ? 'text-emerald-400' : 'text-red-400';

  return (
    <Card className={`p-3 border-border/20 ${cardBg} ${className}`}>
      <div className="flex items-center justify-between gap-3">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          {isBuy ? (
            <TrendingUp className={iconColor} size={20} />
          ) : (
            <TrendingDown className={iconColor} size={20} />
          )}
        </div>

        {/* Middle Info */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-foreground text-base truncate">{activity.stock}</p>
          <p className="text-sm text-muted-foreground truncate">{activity.portfolio.name}</p>
        </div>

        {/* Right Info */}
        <div className="text-right flex-shrink-0 ml-2">
          <p className={`font-bold text-base ${amountColor}`}>
            {sign}${activity.amount.toLocaleString()}
          </p>
          <p className="text-sm text-muted-foreground">
            {`${activity.quantity} @ $${activity.price.toFixed(2)}`}
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
