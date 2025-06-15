
# Component Index & Reference

## 📱 Layout Components

### MobileLayout
**Path**: `src/components/layout/MobileLayout.tsx`
**Purpose**: Main application shell with bottom navigation
**Props**: `{ children: React.ReactNode }`
**RN Conversion**: Use React Navigation Tab Navigator

```typescript
interface MobileLayoutProps {
  children: React.ReactNode;
}
```

**Features**:
- 5-tab bottom navigation (Home, Portfolios, Explore, Activity, Profile)
- Active state indicators
- Responsive design with proper spacing
- ScrollArea integration for content overflow

### GlobalHeader
**Path**: `src/components/layout/GlobalHeader.tsx`
**Purpose**: Standard page header with title and navigation
**RN Conversion**: Use Stack Navigator header

### DiscoverHeader
**Path**: `src/components/layout/DiscoverHeader.tsx`
**Purpose**: Specialized header for discovery page with search
**RN Conversion**: Custom header component with search integration

## 🏠 Page Components

### Home
**Path**: `src/pages/Home.tsx`
**Purpose**: Dashboard overview with portfolio summary
**Key Features**:
- Portfolio performance overview
- Quick actions
- Market highlights
- News and updates

### Portfolios
**Path**: `src/pages/Portfolios.tsx`
**Purpose**: Portfolio management and overview
**Key Features**:
- My Portfolios tab
- Subscribed Portfolios tab
- Performance metrics
- Portfolio creation/editing

### Discover
**Path**: `src/pages/Discover.tsx`
**Purpose**: Market discovery and exploration
**Key Features**:
- Trending portfolios
- Market data
- Creator leaderboards
- Industry heatmaps

### Activity
**Path**: `src/pages/Activity.tsx`
**Purpose**: Trading activity tracking
**Key Features**:
- Activity filtering (All, Week, Buy, Sell)
- Transaction history
- Performance tracking
- Animated card transitions

### Profile
**Path**: `src/pages/Profile.tsx`
**Purpose**: User profile and settings
**Key Features**:
- User statistics
- Settings menu
- Sharpe+ subscription status
- Account management

## 📊 Data Visualization Components

### MiniChart
**Path**: `src/components/discover/MiniChart.tsx`
**Purpose**: Small sparkline charts for quick data visualization
**Props**: `{ data: number[], width: number, height: number }`
**RN Conversion**: Use react-native-svg with Path components

### IndustryHeatmap
**Path**: `src/components/discover/IndustryHeatmap.tsx`
**Purpose**: Visual representation of industry performance
**RN Conversion**: Custom grid layout with colored tiles

## 🃏 Card Components

### PortfolioCard
**Path**: `src/components/portfolio/PortfolioCard.tsx`
**Purpose**: Display portfolio information in card format
**Features**:
- Performance metrics
- Creator information
- Action buttons
- Visual indicators

### TrendingPortfolioCard
**Path**: `src/components/discover/TrendingPortfolioCard.tsx`
**Purpose**: Showcase trending portfolios
**Features**:
- Trend indicators
- Performance highlights
- Quick subscribe action

### ActivityCard
**Path**: `src/components/activity/ActivityCard.tsx`
**Purpose**: Display individual trading activities
**Features**:
- Transaction details
- P&L calculations
- Stock information
- Time stamps

## 🔍 Search & Filter Components

### SearchHeader
**Path**: `src/components/search/SearchHeader.tsx`
**Purpose**: Search input with navigation
**RN Conversion**: TextInput with custom styling

### SearchFilters
**Path**: `src/components/search/SearchFilters.tsx`
**Purpose**: Filter toggles for search results
**Features**:
- Portfolio/User/Stock filters
- Advanced filter modal trigger

### AdvancedFilters
**Path**: `src/components/search/AdvancedFilters.tsx`
**Purpose**: Complex filtering options
**RN Conversion**: Modal with form controls

## 💎 Premium Components (Sharpe+)

### PreSubscriptionScreen
**Path**: `src/components/sharpe-plus/PreSubscriptionScreen.tsx`
**Purpose**: Premium feature preview and subscription prompt
**Features**:
- Feature highlights
- Pricing information
- Subscription CTA
- Mobile-optimized design

### PostSubscriptionScreen
**Path**: `src/components/sharpe-plus/PostSubscriptionScreen.tsx`
**Purpose**: Premium dashboard for subscribers
**Features**:
- Advanced analytics
- Exclusive data
- Deep dive insights

## 🔧 Utility Components

### ScrollArea
**Path**: `src/components/ui/scroll-area.tsx`
**Purpose**: Custom scrollable container
**RN Conversion**: ScrollView with custom styling

### Button
**Path**: `src/components/ui/button.tsx`
**Purpose**: Reusable button component
**Variants**: default, destructive, outline, secondary, ghost, link
**Sizes**: default, sm, lg, icon
**RN Conversion**: TouchableOpacity/Pressable with styled Text

## 📱 React Native Conversion Priority

### High Priority (Core Navigation)
1. MobileLayout → Tab Navigator
2. Page components → Screen components
3. GlobalHeader → Stack Navigator headers

### Medium Priority (Data Display)
1. Card components → Custom View components
2. Chart components → react-native-chart-kit
3. List components → FlatList/SectionList

### Low Priority (Polish)
1. Animation components → react-native-reanimated
2. Gesture handling → react-native-gesture-handler
3. Advanced UI components → Custom implementations

## 🎨 Styling Patterns

### Common Tailwind → RN Style Mappings

```typescript
// Tailwind CSS → React Native StyleSheet
'flex' → { display: 'flex' }
'flex-1' → { flex: 1 }
'items-center' → { alignItems: 'center' }
'justify-between' → { justifyContent: 'space-between' }
'p-4' → { padding: 16 }
'mb-2' → { marginBottom: 8 }
'bg-card' → { backgroundColor: colors.card }
'text-foreground' → { color: colors.foreground }
'rounded-lg' → { borderRadius: 8 }
'shadow-sm' → { elevation: 2 } // Android
```

### Color System Migration
```typescript
// Convert Tailwind color classes to theme colors
const colors = {
  background: '#0a0a0a',
  foreground: '#fafafa',
  card: '#1a1a1a',
  border: '#262626',
  primary: '#10b981', // emerald-500
  secondary: '#8b5cf6', // purple-500
  // ... etc
};
```
