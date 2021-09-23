import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';

import {StackParamList} from '../types/StackParamList';
import TodoDetailsScreen from '../screens/TodoDetailsScreen';
import TodoListScreen from '../screens/TodoListScreen';

const Stack = createStackNavigator<StackParamList>();
const options: StackNavigationOptions = {headerShown: false};

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="Home" component={TodoListScreen} />
      <Stack.Screen
        options={options}
        name="Details"
        component={TodoDetailsScreen}
      />
    </Stack.Navigator>
  );
}
