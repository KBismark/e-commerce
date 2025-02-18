import React from 'react';
import { Tabs } from 'expo-router';
import { Feather, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { View, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const useTheme = ()=>({
  mode: 'light',
  colors: {
    primary: '#ef4444', 
    neutral: '#eee', 
    white: '#fff', 
    blurColor: '#f3f3f3'
  }
})

export default function TabLayout() {
  const {mode, colors} = useTheme()
  const {primary, neutral, white, blurColor}  = colors;

  return (
    <Tabs
      screenListeners={{
        tabPress(e){
          const target = e.target as any
          let pressedTabButton = (target.name||target||'').toLowerCase().trim().split('-').join('/').split('/').shift();
          if(pressedTabButton==='index') pressedTabButton = 'chats';
          // updateGlobalTabStore({actors: ['activeTab'], store: {activeTab: pressedTabButton}});
        }
      }}
      screenOptions={{
        tabBarActiveTintColor: primary,
        tabBarBackground() {
          return (
            isAndroid? 
            <View style={{width: '100%', height: 60, backgroundColor: white}}/>
            :
            <BlurView intensity={mode==='dark'?80:10} style={{width: '100%', height: 60}} />
          )
        },
        
        tabBarStyle: {
          backgroundColor: blurColor,
          borderTopWidth: 0,
          borderTopColor: 'rgba(0,0,0,0)',
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='home-variant' color={color} size={26} />,
          
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Basket',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name='basket' color={color} size={26} />,

        }}
      />
      <Tabs.Screen
        name="shops"
        options={{
          title: 'Shops',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <FontAwesome6 style={{marginLeft: -2}} name='shop' color={color} size={20} />,

        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarLabelStyle: {fontSize: 12, fontWeight: '500'},
          tabBarIcon: ({ color }) => <Feather name='search' color={color} size={26} />,

        }}
      />
    </Tabs>
  );
}
