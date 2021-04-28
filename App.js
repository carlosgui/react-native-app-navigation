import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Drawer from './src/navegacao/Drawer';
import Stack from './src/navegacao/Stack';
import Tab from './src/navegacao/Tab';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        {/* <Drawer /> */}
        {/* <Stack /> */}
        <Tab />
      </NavigationContainer>
    </SafeAreaView>
  );
}