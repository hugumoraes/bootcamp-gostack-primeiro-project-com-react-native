import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Teste from './pages/Teste';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Olá mundo' }}
      />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen
        name="Teste"
        component={Teste}
        options={{ titlel: 'Try that' }}
      />
    </Stack.Navigator>
  );
}
