
# Sharpe Market Mobile Design - Project Overview

## 🏗️ Architecture Overview

This is a mobile-first financial portfolio tracking application built with React, TypeScript, and Tailwind CSS. The app follows a component-based architecture optimized for mobile devices with bottom navigation.

### 🎯 Core Features
- **Portfolio Management**: Track and manage investment portfolios
- **Market Discovery**: Explore trending portfolios and market data
- **Activity Tracking**: Monitor trading activity and performance
- **Stock Analysis**: Detailed stock information and charts
- **Sharpe+ Premium**: Advanced analytics and insights
- **Search & Filters**: Advanced search with filtering capabilities

### 📱 Mobile-First Design Principles
- Bottom navigation for easy thumb access
- Responsive cards and layouts
- Touch-friendly interactive elements
- Optimized for portrait orientation
- Safe area handling for different devices

## 🔧 Technology Stack

### Frontend Framework
- **React 18** - Component-based UI framework
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool and dev server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - High-quality component library
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### State Management & Data
- **Tanstack Query** - Server state management
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling

## 📂 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── layout/          # Layout components (headers, navigation)
│   ├── activity/        # Activity tracking components
│   ├── discover/        # Market discovery components
│   ├── portfolio/       # Portfolio management components
│   ├── profile/         # User profile components
│   ├── search/          # Search and filtering components
│   ├── sharpe-plus/     # Premium features components
│   └── stock-detail/    # Stock analysis components
├── pages/               # Page-level components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── data/                # Static data and mock data
```

## 🚀 React Native Conversion Notes

### Navigation Considerations
- Current: React Router DOM with browser history
- RN Conversion: Use React Navigation with stack/tab navigators
- Bottom tab structure translates directly

### Styling Migration
- Tailwind classes → StyleSheet objects
- Responsive utilities → Dimensions API
- CSS Grid/Flexbox → React Native Flexbox

### Component Mapping
- `div` → `View`
- `span`/`p` → `Text`
- `img` → `Image`
- `button` → `TouchableOpacity`/`Pressable`
- ScrollArea → `ScrollView`/`FlatList`

### Platform-Specific Features
- Safe area handling with `react-native-safe-area-context`
- Haptic feedback for interactions
- Native charts with `react-native-chart-kit`
- Gesture handling with `react-native-gesture-handler`

## 🎨 Design System

### Color Palette
- Primary: Emerald (green) shades for positive actions
- Secondary: Purple shades for premium features
- Accent: Blue for information and charts
- Status: Red for losses, Green for gains
- Neutral: Gray scale for backgrounds and text

### Typography
- Headlines: Bold, larger sizes for key information
- Body: Regular weight for readable content
- Captions: Smaller text for secondary information
- Numbers: Monospace for financial data alignment

### Spacing System
- Base unit: 4px (0.25rem)
- Common spacings: 8px, 12px, 16px, 24px, 32px
- Container padding: 16px (p-4)
- Card spacing: 12px gap between cards

## 🔄 Data Flow Patterns

### API Integration
- Tanstack Query for server state
- Optimistic updates for better UX
- Background refetching for real-time data
- Error handling with retry mechanisms

### State Management
- Component-level state with useState
- Form state with React Hook Form
- URL state with React Router
- Server state with Tanstack Query

## 📊 Performance Considerations

### Code Splitting
- Lazy loading for page components
- Dynamic imports for heavy components
- Tree shaking with ES modules

### Mobile Optimization
- Virtual scrolling for long lists
- Image lazy loading and optimization
- Minimal bundle size with selective imports
- Efficient re-renders with React.memo

## 🧪 Testing Strategy

### Component Testing
- Unit tests for utility functions
- Component tests with React Testing Library
- Visual regression tests for UI consistency

### Mobile Testing
- Device-specific testing on various screen sizes
- Touch interaction testing
- Performance testing on lower-end devices

## 🚀 Deployment

### Web Deployment
- Static site generation
- CDN deployment for fast loading
- Progressive Web App features

### React Native Deployment
- iOS App Store distribution
- Google Play Store distribution
- Over-the-air updates with CodePush
