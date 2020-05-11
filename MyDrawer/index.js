// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';
import PerfilScreen from '../MyScreens/PerfilScreen';
import HomeScreen from '../MyScreens/HomeScreen';
import MyOrders from '../MyScreens/MyOrders';
import DrawerContent from '../MyScreens/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';

//function PerfilScreen() {
//  return (
//    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//      <Text style={{fontSize: 20}}>Perfil Screen</Text>
//    </View>
//  );
//}

//const Stack = createStackNavigator();

//function MyDrawer() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator>
//        <Stack.Screen name="Home" component={HomeScreen} />
//        <Stack.Screen name="Perfil" component={PerfilScreen} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//}

//Header

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="My Orders" component={MyOrders} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;
