import "../global.css";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { memo, useEffect } from 'react';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { store } from '@/store';
import { Provider as ReduxStoreProvider } from 'react-redux';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <SafeAreaProvider>
      <ReduxStoreProvider store={store}>
        <App />
      </ReduxStoreProvider>
    </SafeAreaProvider>
  );
}


const screenOptions = {headerShown: false}

const App = memo(()=>{
  const {mode} = { mode: 'light'};
  return (
    <>
      <View className="bg-white flex-1">
        <Stack>
          <Stack.Screen name="(tabs)" options={screenOptions} />
        </Stack>
      </View>
      <StatusBar style={mode==='dark'?'light': 'dark'} />
    </>
  )
})
