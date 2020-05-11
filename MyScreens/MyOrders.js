import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const MyOrders = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Orders" component={MyOrders1} />
      {/*<Stack.Screen name="My Orders2" component={MyOrders2} />*/}
    </Stack.Navigator>
  );
};

export default MyOrders;

const MyOrders1 = () => {
  return (
    <View>
      <Text>MyOrders1</Text>
    </View>
  );
};
