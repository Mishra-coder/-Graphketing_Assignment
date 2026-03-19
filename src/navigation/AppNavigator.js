import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PeoplesList from '../screens/PeoplesList';
import PersonDetails from '../screens/PersonDetails';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="PeoplesList"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ffffff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#f0f0f0',
        },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
          color: '#1a1a1a',
        },
        headerTintColor: '#1a1a1a',
      }}
    >
      <Stack.Screen 
        name="PeoplesList" 
        component={PeoplesList} 
        options={{ title: 'Directory' }} 
      />
      <Stack.Screen 
        name="PersonDetails" 
        component={PersonDetails} 
        options={({ route }) => ({ title: route.params?.personName || 'Profile' })} 
      />
    </Stack.Navigator>
  );
}
