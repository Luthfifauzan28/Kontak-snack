import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import About from './components/About';
import Kontak from './components/Kontak';
import Detailkontak from './components/Detailkontak';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Kontak" component={Kontak} />
        <Stack.Screen name="Detailkontak" component={Detailkontak} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
