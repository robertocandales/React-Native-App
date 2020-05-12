import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import {loginStyles} from '../styles/styles';
import color from '../styles/colors';
import MyTextInput from '../component/MyTextInput';

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(false);
  return (
    <View style={[loginStyles.container, {padding:50}]}>
      <StatusBar backgroundColor={color.BLUE} translucent={true} />
      <View style={loginStyles.logo}>
        <Image
          source={{
            uri:
              'https://www.kindpng.com/picc/m/121-1218486_ecommerce-web-development-modelos-de-negocio-b2c-hd.png',
          }}
          style={{width: 250, height: 250, borderRadius:90}}
        />
      </View>
      <MyTextInput
        keyboardType="email-address"
        placeholder="E-Mail"
        image="user"
      />
      <MyTextInput
        keyboardType="null"
        placeholder="Password"
        image="lock"
        bolGone={true}
        secureTextEntry={!hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
      />

      <View style={loginStyles.btnMain}>
        <TouchableOpacity>
          <Text style={loginStyles.btntxt}>Register</Text>
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
