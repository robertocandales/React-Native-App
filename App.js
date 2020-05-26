/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Text, View, Image, ActivityIndicator} from 'react-native';
//import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator, DrawerItems} from '@react-navigation/drawer';
import PerfilScreen from './MyScreens/PerfilScreen';
import HomeScreen from './MyScreens/HomeScreen';
import MyOrders from './MyScreens/MyOrders';
import DrawerContent from './MyScreens/DrawerContent';
import LoginScreen from './MyScreens/LoginScreen';
import {AuthContext} from './component/Context';

const Drawer = createDrawerNavigator();
const App = () => {
  const initialLoginState = {
    isLoading: true,
    userToken: 'null',
    email: null,
  };
  const loginReducer = (prevState, action) => {
    console.log(action);
    console.log(prevState);

    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: action.isLoading,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: 'null',
          email: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );
  const authContext = React.useMemo(
    () => ({
      signIn: (email, password) => {
        console.log('sign in');
        console.log(email);
        console.log(password);

        let userToken;
        if (email === 'user' && password === 'pass') {
          userToken = 'token';
          dispatch({type: 'LOGIN', id: email, token: userToken});
        }
      },
      signOut: () => {
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {},
    }),
    [],
  );

  React.useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'RETRIEVE_TOKEN',
        userToken: 'null',
        isLoading: false,
      });
    }, 8000);
  }, []);

  console.log(`Token ${initialLoginState.userToken}`);

  if (loginState.isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}>
        <ActivityIndicator size="large" />
        <Image
          source={{
            uri:
              'https://www.kindpng.com/picc/m/121-1218486_ecommerce-web-development-modelos-de-negocio-b2c-hd.png',
          }}
          style={{width: 250, height: 250, borderRadius: 90}}
        />
        <Text
          style={{
            fontSize: 25,
            color: 'blue',
            padding: 40,
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Welcome to the best delivery experience, easier and cheaper
        </Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken === 'token' ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={PerfilScreen} />
            <Drawer.Screen name="My Orders" component={MyOrders} />
            <Drawer.Screen name="My Account" component={LoginScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;

//const styles = StyleSheet.create({});
