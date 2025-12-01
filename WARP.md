# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React Native starter project built with Expo and React Navigation. It's a learning/tutorial project progressing through chapters covering FlatLists, buttons, and navigation patterns.

## Development Commands

### Starting the App
```bash
npm start          # Start Expo dev server with interactive menu
npm run android    # Start and run on Android device/emulator
npm run ios        # Start and run on iOS simulator (macOS only)
npm run web        # Start and run in web browser
```

### Initial Setup
```bash
npm install        # Install all dependencies
```

Note: This project uses Expo CLI. Ensure you have the Expo Go app installed on your mobile device for testing, or have Android Studio/Xcode configured for emulator testing.

## Architecture

### Project Structure
```
src/
  screens/         # All screen components
App.js             # Root component with navigation setup
index.js           # Entry point (registers root component with Expo)
```

### Navigation Architecture

The app uses **React Navigation v7** with a stack-based navigation pattern:

- **App.js** is the root navigation container that sets up the entire navigation hierarchy
- Uses `createStackNavigator()` from `@react-navigation/stack` 
- All screens are registered in the `AppNavigator` component
- Headers are globally disabled (`headerShown: false`) for all screens
- Navigation is wrapped in `NavigationContainer` from `@react-navigation/native`

**Current Navigation Flow:**
- Home → Components, List, or GettingStarted

### Screen Component Pattern

All screens follow a consistent structure:
- Located in `src/screens/` directory

- Receive `navigation` prop automatically from React Navigation
- Use functional components (no class components)
- Inline StyleSheet definitions using `StyleSheet.create()`
- Navigate using `navigation.navigate('ScreenName')`

### Key Dependencies

**Navigation Stack:**
- `@react-navigation/native` + `@react-navigation/stack` (v7)
- Legacy `react-navigation` v4 also present (likely unused, be cautious)
- Navigation gesture handlers: `react-native-gesture-handler`, `react-native-reanimated`

**Expo:**
- This is an **Expo-managed** React Native project
- Uses Expo SDK 54 with React Native 0.81.5
- New Architecture enabled (`newArchEnabled: true` in app.json)
- Android edge-to-edge enabled

## Adding New Screens

When creating a new screen:

1. Create the screen component in `src/screens/[ScreenName].js`
2. Register it in `App.js` within the `Stack.Navigator`:
   ```jsx
   <Stack.Screen name="ScreenName" component={ScreenComponent} />
   ```
3. Navigate to it from any screen using:
   ```jsx
   navigation.navigate('ScreenName')
   ```

## Features

- **Object Destruction**: Object destruction feature has been added to the project

## Windows-Specific Notes

This project is being developed on Windows with PowerShell. When running shell commands:
- Use PowerShell cmdlets instead of Unix commands (e.g., `Get-ChildItem` instead of `ls`)
- Expo works cross-platform but ensure Android SDK is properly configured for Android development
