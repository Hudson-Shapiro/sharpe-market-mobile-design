
# React Native Conversion Guide

## 🎯 Overview

This guide provides step-by-step instructions for converting the Sharpe Market web application to React Native, maintaining all functionality while adapting to native mobile patterns.

## 📋 Pre-Conversion Checklist

### Dependencies to Install
```bash
npm install react-native
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/stack
npm install react-native-safe-area-context
npm install react-native-svg react-native-chart-kit
npm install @tanstack/react-query
npm install react-hook-form
```

### Project Structure Setup
```
ReactNativeApp/
├── src/
│   ├── components/
│   ├── screens/
│   ├── navigation/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   └── constants/
```

## 🔄 Navigation Conversion

### Current Web Navigation
```typescript
// Web - React Router
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/portfolios" element={<Portfolios />} />
    // ...
  </Routes>
</BrowserRouter>
```

### React Native Navigation
```typescript
// RN - React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1a1a1a' },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfolios" component={PortfoliosScreen} />
        <Tab.Screen name="Discover" component={DiscoverScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
```

## 🎨 Styling Conversion

### Theme System Setup
```typescript
// constants/theme.ts
export const theme = {
  colors: {
    background: '#0a0a0a',
    foreground: '#fafafa',
    card: '#1a1a1a',
    border: '#262626',
    primary: '#10b981',
    secondary: '#8b5cf6',
    muted: '#737373',
    emerald: {
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
    },
    purple: {
      400: '#a78bfa',
      500: '#8b5cf6',
      600: '#7c3aed',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  typography: {
    heading: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal',
    },
  },
};
```

### Component Style Conversion Example
```typescript
// Web Component (Tailwind)
function PortfolioCard({ portfolio }) {
  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-3">
      <h3 className="text-lg font-bold text-foreground mb-2">
        {portfolio.name}
      </h3>
      <p className="text-muted-foreground text-sm">
        {portfolio.description}
      </p>
    </div>
  );
}

// React Native Conversion
import { View, Text, StyleSheet } from 'react-native';

function PortfolioCard({ portfolio }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{portfolio.name}</Text>
      <Text style={styles.description}>{portfolio.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.foreground,
    marginBottom: theme.spacing.sm,
  },
  description: {
    color: theme.colors.muted,
    fontSize: 14,
  },
});
```

## 📊 Chart Component Conversion

### Web Chart (Recharts)
```typescript
import { LineChart, Line, ResponsiveContainer } from 'recharts';

function MiniChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={40}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

### React Native Chart
```typescript
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

function MiniChart({ data }) {
  const screenWidth = Dimensions.get('window').width;
  
  return (
    <LineChart
      data={{
        datasets: [{ data }],
      }}
      width={screenWidth - 32}
      height={40}
      chartConfig={{
        backgroundColor: 'transparent',
        backgroundGradientFrom: 'transparent',
        backgroundGradientTo: 'transparent',
        color: () => theme.colors.primary,
        strokeWidth: 2,
        propsForDots: { r: '0' },
      }}
      bezier
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      withVerticalLabels={false}
      withHorizontalLabels={false}
    />
  );
}
```

## 🔍 Search Component Conversion

### Web Search
```typescript
function SearchHeader({ searchQuery, setSearchQuery }) {
  return (
    <div className="p-4 flex items-center gap-3">
      <div className="flex-1 relative">
        <Input 
          placeholder="Search portfolios, users, stocks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
```

### React Native Search
```typescript
import { View, TextInput, StyleSheet } from 'react-native';

function SearchHeader({ searchQuery, setSearchQuery }) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search portfolios, users, stocks..."
          placeholderTextColor={theme.colors.muted}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.xl,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
  },
  searchInput: {
    color: theme.colors.foreground,
    fontSize: 16,
  },
});
```

## 📱 List Component Conversion

### Web List (with ScrollArea)
```typescript
function ActivityList({ activities }) {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-2 p-4">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </ScrollArea>
  );
}
```

### React Native List (FlatList)
```typescript
import { FlatList } from 'react-native';

function ActivityList({ activities }) {
  const renderActivity = ({ item, index }) => (
    <ActivityCard activity={item} />
  );

  return (
    <FlatList
      data={activities}
      renderItem={renderActivity}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: theme.spacing.lg,
  },
  separator: {
    height: theme.spacing.sm,
  },
});
```

## 🔄 State Management Migration

### Web (Tanstack Query)
```typescript
// Same query hooks work in React Native
import { useQuery } from '@tanstack/react-query';

function usePortfolios() {
  return useQuery({
    queryKey: ['portfolios'],
    queryFn: fetchPortfolios,
  });
}
```

### React Native Considerations
- Network state handling with NetInfo
- Background app state management
- Offline data persistence with AsyncStorage

## 📋 Component Migration Checklist

### Layout Components
- [ ] MobileLayout → Tab Navigator
- [ ] GlobalHeader → Stack Navigator header
- [ ] DiscoverHeader → Custom header component

### Page Components
- [ ] Home → HomeScreen
- [ ] Portfolios → PortfoliosScreen
- [ ] Discover → DiscoverScreen
- [ ] Activity → ActivityScreen
- [ ] Profile → ProfileScreen

### UI Components
- [ ] Button → TouchableOpacity/Pressable
- [ ] Input → TextInput
- [ ] Card → View with styling
- [ ] ScrollArea → ScrollView/FlatList

### Data Components
- [ ] Charts → react-native-chart-kit
- [ ] Images → Image with source handling
- [ ] Icons → react-native-vector-icons

## 🚀 Performance Optimizations

### Image Handling
```typescript
// Web
<img src={imageUrl} alt="Portfolio" className="w-12 h-12 rounded-full" />

// React Native
<Image 
  source={{ uri: imageUrl }}
  style={styles.profileImage}
  resizeMode="cover"
/>
```

### Memory Management
- Use FlatList for long lists
- Implement proper cleanup in useEffect
- Optimize image loading with lazy loading
- Use React.memo for expensive components

### Animation
```typescript
// Web (CSS transitions)
className="transition-all duration-300 hover:scale-105"

// React Native (Reanimated)
import Animated, { useSharedValue, withSpring, useAnimatedStyle } from 'react-native-reanimated';

const scale = useSharedValue(1);
const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

// In component
<Animated.View style={[styles.card, animatedStyle]}>
```

## 🧪 Testing Strategy

### Component Testing
```typescript
// Web testing patterns translate well to RN
import { render, fireEvent } from '@testing-library/react-native';

test('portfolio card displays correctly', () => {
  const portfolio = { name: 'Test Portfolio', return: 15.2 };
  const { getByText } = render(<PortfolioCard portfolio={portfolio} />);
  
  expect(getByText('Test Portfolio')).toBeTruthy();
  expect(getByText('15.2%')).toBeTruthy();
});
```

### Integration Testing
- Use Detox for E2E testing
- Test navigation flows
- Test data fetching and display
- Test offline functionality

## 📱 Platform-Specific Considerations

### iOS Specific
- Safe area handling with useSafeAreaInsets
- iOS-style navigation patterns
- Haptic feedback integration
- App Store submission requirements

### Android Specific
- Material Design principles
- Hardware back button handling
- Permissions handling
- Google Play requirements

This conversion guide provides a comprehensive roadmap for migrating the web application to React Native while preserving all functionality and user experience patterns.
