import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

//import Icon from '../node_modules/react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = props => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={style.drawerContent}>
          <View style={style.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://www.enfasys.net/wp-content/uploads/2019/05/ecommerce.jpg',
                }}
                size={80}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={style.title}>Market</Title>
                <Caption style={style.caption}>Top Products</Caption>
              </View>
            </View>
            <View style={style.section}>
              <Avatar.Image
                source={{
                  uri: 'https://www.banderas-mundo.es/data/flags/ultra/ar.png',
                }}
                size={25}
              />
              <Paragraph style={style.paragraph}>Argentina</Paragraph>
              {/*<Caption style={style.caption}>Products</Caption>*/}
            </View>
          </View>
          <Drawer.Section style={style.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              label="Home"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="directions" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('Perfil');
              }}
              label="My Location"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="shopping" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('My Orders');
              }}
              label="My Orders"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="heart" color={color} size={size} />
              )}
              onPress={() => {}}
              label="My favourites"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="ticket" color={color} size={size} />
              )}
              onPress={() => {}}
              label="My Coupons"
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-circle-outline" color={color} size={size} />
              )}
              onPress={() => {
                props.navigation.navigate('My Account');
              }}
              label="My Account"
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="store" color={color} size={size} />
              )}
              onPress={() => {}}
              label="Register Store"
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={style.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={style.drawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {}}
          label="Sign Out"
        />
      </Drawer.Section>
    </View>
  );
};

const style = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: 'black',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 10,
  },
  paragraph: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  drawerSection: {
    marginTop: 10,
  },
  bottonDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});

export default DrawerContent;
