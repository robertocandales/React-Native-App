/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {loginStyles} from '../styles/styles';
import color from '../styles/colors';
import MyTextInput from '../component/MyTextInput';
import {AuthContext} from './../component/Context';

const LoginScreen = ({navigate}) => {
  const {signIn} = React.useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState(false);
  const [data, setdata] = useState({
    email: '',
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });
  const textInputCHange = val => {
    if (val.length !== 0) {
      setdata({
        ...data,
        email: val,
        checkTextInputChange: true,
      });
    } else {
      setdata({
        ...data,
        email: val,
        checkTextInputChange: false,
      });
    }
  };
  const handlerPassword = val => {
    setdata({
      ...data,
      password: val,
    });
  };
  const updateTextEntry = () => {
    setdata({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const loginHandler = (email, password) => {
    signIn(email, password);
  };
  return (
    <View style={[loginStyles.container, {padding: 50}]}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={{
            uri:
              'https://www.kindpng.com/picc/m/121-1218486_ecommerce-web-development-modelos-de-negocio-b2c-hd.png',
          }}
          style={{width: 250, height: 250, borderRadius: 90}}
        />
      </View>
      <MyTextInput
        keyboardType="email-address"
        placeholder="E-Mail"
        image="user"
        onChangeText={val => textInputCHange(val)}
      />
      <MyTextInput
        keyboardType={null}
        placeholder="Password"
        image="lock"
        bolGone={true}
        secureTextEntry={!hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        onChangeText={val => handlerPassword(val)}
      />

      <View style={loginStyles.btnMain}>
        <TouchableOpacity
          onPress={() => loginHandler(data.email, data.password)}>
          <Text style={loginStyles.btntxt}>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={[
              loginStyles.txtTransparent,
              {textDecorationLine: 'underline'},
            ]}>
            Forget my Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
