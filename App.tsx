import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import ConfigScreen from './screens/ConfigScreen';
import MenuScreen from './screens/MenuScreen';
import MesasScreen from './screens/MesasScreen';
import CuentaScreen from './screens/CuentaScreen';

export default function App() {
const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Config" component={ConfigScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="Mesas" component={MesasScreen} />
          <Tab.Screen name="Cuenta" component={CuentaScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
