import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';
import Signup from './screens/Signup';
import StudentDashboard from './screens/StudentDashboard';
import WriterDashboard from './screens/WriterDashboard';
import AdminDashboard from './screens/AdminDashboard';
import Chat from './screens/Chat';
import PlaceOrder from './screens/PlaceOrder';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="WriterDashboard" component={WriterDashboard} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
