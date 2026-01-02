# Damolor Mobile App

React Native mobile application for the Damolor custodial investment platform.

## 🎯 About

Damolor is a Nigerian custodial investment platform that enables parents to create and manage investment accounts for their children. This mobile app provides a native experience for iOS and Android users.

## 🚀 Features

- 🔐 Secure Authentication (JWT with refresh tokens)
- 👨‍👩‍👧‍👦 Child Account Management
- 📋 KYC Verification
- 💰 Wallet Management (NGN & USD)
- 📈 Portfolio Tracking
- 🎯 Tasks & Rewards System
- 🔔 Push Notifications
- 📊 Real-time Stock Market Data

## 🛠️ Tech Stack

- **Framework**: React Native 0.73
- **Language**: TypeScript
- **Navigation**: React Navigation
- **State Management**: (To be added)
- **API Client**: Axios
- **Storage**: AsyncStorage

## 📋 Prerequisites

- Node.js >= 18
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## 🏃 Getting Started

### Installation

```bash
# Install dependencies
npm install

# For iOS, install CocoaPods
cd ios && pod install && cd ..
```

### Running the App

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 📁 Project Structure

```
damolor-mobile/
├── src/
│   ├── screens/          # Screen components
│   ├── components/        # Reusable components
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API services
│   ├── store/            # State management
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript types
│   └── constants/        # App constants
├── App.tsx               # Root component
├── index.js              # Entry point
└── package.json
```

## 🔗 API Integration

The app connects to the Damolor backend API:
- **Production**: https://api.damolor.com
- **Staging**: https://staging-api.damolor.com

## 📝 Development

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm test
```

## 📱 Platform Support

- iOS 13+
- Android API 21+ (Android 5.0+)

## 📄 License

Proprietary - Damolor © 2025

