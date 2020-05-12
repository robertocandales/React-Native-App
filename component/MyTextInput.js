import React from 'react';
import {StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import color from '../styles//colors';

export default function MyTextInput(props) {
  return (
      
    <Input
      style={{alignItems: 'center'}}
      containerStyle={{
        marginBottom: 20,
        //borderBottomColor: color.LIGHTPRIMARYCOLOR,
        //borderBottomWidth: 1,
      }}
      inputStyle={{
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginTop: 12,
        color: color.PRIMARYCOLOR,
        fontFamily: 'Poppins-Light',
      }}
      placeholderTextColor={color.LIGHTPRIMARYCOLOR}
      placeholder={props.placeholder}
      leftIconContainerStyle={{marginLeft: 0}}
      leftIcon={
        <Icon
          size={24}
          color={color.PRIMARYCOLOR}
          type={'font-awesome'}
          name={props.image}
        />
      }
      rightIcon={
        props.bolGone ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnVisibility}
            onPress={props.onPress}>
            <Image
              style={styles.btnImage}
              tintColor={color.PRIMARYCOLOR}
              source={
                props.secureTextEntry
                  ? {
                      uri:
                        'https://icons-for-free.com/iconfiles/png/512/remove+red+eye+24px-131985228229827633.png',
                    }
                  : {
                      uri:
                        'https://icons-for-free.com/iconfiles/png/512/visibility+off+24px-131985194552014225.png',
                    }
              }
            />
          </TouchableOpacity>
        ) : (
          <Icon
            size={24}
            color={color.PRIMARYCOLOR}
            type={'font-awesome'}
            name={props.imageRight}
          />
        )
      }
      errorStyle={{color: color.RED}}
      errorMessage={props.bolError ? props.strError : ''}
      editable={props.editable}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}

const styles = StyleSheet.create({
  btnVisibility: {
    height: 40,
    width: 35,
    paddingTop: 8,
    paddingLeft: 5,
    paddingRight: 5,
  },

  btnImage: {
    resizeMode: 'contain',
    height: '110%',
    width: '110%',
  },
});
