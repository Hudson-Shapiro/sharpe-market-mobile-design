
/**
 * Centralized type definitions for the Sharpe Market application
 * 
 * This file contains all the TypeScript interfaces and types used throughout
 * the application. Keeping types centralized makes it easier to maintain
 * consistency and provides a single source of truth for data structures.
 * 
 * For React Native conversion: These types can be used directly in RN
 * with minimal modifications.
 */

// ========================================
// Core Business Domain Types
// ========================================

/**
 * User account information
 * Used across profile, authentication, and display components
 */
export interface User {
  id: string;
  username: string;
  displayName: string;
  email?: string;
  avatar?: string;
  bio?: string;
  isVerified: boolean;
  followerCount: number;
  followingCount: number;
  portfolioCount: number;
  totalReturn: number;
  joinDate: string;
  sharePlusSubscriber: boolean;
}

/**
 * Portfolio data structure
 * Core entity for investment tracking and display
 */
export interface Portfolio {
  id: string;
  name: string;
  description: string;
  creator: {
    id: string;
    username: string;
    displayName: string;
    avatar?: string;
    isVerified: boolean;
  };
  performance: {
    totalReturn: number;
    totalReturnPercentage: number;
    dayChange: number;
    dayChangePercentage: number;
    weekChange: number;
    monthChange: number;
    yearToDateChange: number;
    maxDrawdown: number;
    sharpeRatio: number;
    volatility: number;
  };
  holdings: Holding[];
  totalValue: number;
  subscriberCount: number;
  isSubscribed: boolean;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  riskLevel: 'low' | 'medium' | 'high';
  category: string;
  benchmark?: string;
}

/**
 * Individual stock/asset holding within a portfolio
 */
export interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  allocation: number; // Percentage of portfolio
  dayChange: number;
  dayChangePercentage: number;
  totalReturn: number;
  totalReturnPercentage: number;
  sector: string;
  industry: string;
  lastUpdated: string;
}

/**
 * Stock/Security detailed information
 * Used in stock detail pages and search results
 */
export interface Stock {
  symbol: string;
  name: string;
  currentPrice: number;
  dayChange: number;
  dayChangePercentage: number;
  volume: number;
  marketCap: number;
  peRatio?: number;
  dividendYield?: number;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  sector: string;
  industry: string;
  description: string;
  website?: string;
  headquarters?: string;
  employees?: number;
  founded?: string;
  priceHistory: PricePoint[];
}

/**
 * Price data point for charts and historical data
 */
export interface PricePoint {
  timestamp: string;
  price: number;
  volume?: number;
}

/**
 * Trading activity/transaction record
 */
export interface Activity {
  id: string;
  portfolio: {
    id: string;
    name: string;
    creator: string;
  };
  stock: string;
  type: 'BUY' | 'SELL';
  quantity: number;
  price: number;
  amount: number;
  date: string;
  allocation: number;
  smPrice: number; // Sharpe Market price
  currentPrice: number;
}

// ========================================
// UI Component Types
// ========================================

/**
 * Navigation tab configuration
 * Used by MobileLayout component
 */
export interface NavigationTab {
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  isActive?: boolean;
}

/**
 * Filter option for search and discovery
 */
export interface FilterOption {
  id: string;
  label: string;
  value: string;
  icon?: React.ComponentType<{ size?: number }>;
}

/**
 * Chart configuration for data visualization
 */
export interface ChartConfig {
  data: number[];
  width: number;
  height: number;
  color?: string;
  strokeWidth?: number;
  showDots?: boolean;
  gradient?: boolean;
}

/**
 * Card component props pattern
 * Common interface for card-based components
 */
export interface CardProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
}

// ========================================
// API & Data Fetching Types
// ========================================

/**
 * API response wrapper
 * Standard format for all API responses
 */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  errors?: string[];
  pagination?: PaginationInfo;
}

/**
 * Pagination information for list responses
 */
export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Search parameters for API requests
 */
export interface SearchParams {
  query?: string;
  filter?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
  timeframe?: '1D' | '1W' | '1M' | '3M' | '1Y' | 'ALL';
}

// ========================================
// Form & Input Types
// ========================================

/**
 * Form validation error
 */
export interface FormError {
  field: string;
  message: string;
}

/**
 * Search form state
 */
export interface SearchFormData {
  query: string;
  scope: 'portfolios' | 'users' | 'stocks';
  filters: {
    timeframe: string;
    performance: string;
    risk: string;
    category: string;
  };
}

// ========================================
// Premium Features (Sharpe+) Types
// ========================================

/**
 * Sharpe+ subscription information
 */
export interface SharpePlusSubscription {
  isActive: boolean;
  plan: 'monthly' | 'yearly';
  price: number;
  renewalDate: string;
  features: string[];
  usage: {
    apiCalls: number;
    apiLimit: number;
    reportsGenerated: number;
    reportsLimit: number;
  };
}

/**
 * Advanced analytics data for Sharpe+ subscribers
 */
export interface AdvancedAnalytics {
  topHoldings: {
    symbol: string;
    allocation: number;
    portfoliosPenetration: number;
    dayChange: number;
  }[];
  sectorAllocation: {
    sector: string;
    allocation: number;
    portfoliosPenetration: number;
    dayChange: number;
  }[];
  behavioralInsights: {
    symbol: string;
    change: string;
    portfoliosPenetration: string;
    trend: 'up' | 'down';
  }[];
  marketSentiment: {
    bullish: number;
    bearish: number;
    neutral: number;
  };
}

// ========================================
// Utility Types
// ========================================

/**
 * Generic loading state
 */
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

/**
 * Time range options for charts and data
 */
export type TimeRange = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | '2Y' | '5Y' | 'ALL';

/**
 * Theme color variants
 */
export type ColorVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'muted';

/**
 * Component size variants
 */
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// ========================================
// React Native Specific Types
// ========================================

/**
 * Screen navigation props pattern for React Native
 * Used when converting to React Navigation
 */
export interface ScreenProps {
  navigation: any; // React Navigation navigation prop
  route: any; // React Navigation route prop
}

/**
 * Gesture handler props for React Native
 */
export interface GestureProps {
  onPress?: () => void;
  onLongPress?: () => void;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

/**
 * Platform-specific styling
 * For React Native conversion
 */
export interface PlatformStyles {
  ios?: object;
  android?: object;
  web?: string; // Tailwind classes
}

// ========================================
// Export all types for easy importing
// ========================================

export type {
  // Re-export common React types for convenience
  React,
  ReactNode,
  ComponentType,
  FC,
  PropsWithChildren,
} from 'react';
