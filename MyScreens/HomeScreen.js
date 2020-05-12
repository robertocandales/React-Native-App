import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
//import {ListItem} from 'react-native-elements';
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const HomeScreen = ({navigation}) => {
  const menu = () => {
    navigation.openDrawer();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Icon
              name="menu"
              size={30}
              style={{marginLeft: 10}}
              onPress={menu}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeScreen;

function Home(props) {
  const [data, setData] = useState([]);
  const [coctail, setCoctail] = useState([]);

  const api = async () => {
    const getApi = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
    );
    const getApiCoctail = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
    );
    console.log(getApi.data.meals);
    console.log(getApiCoctail.data.drinks);

    setData(getApi.data.meals);
    setCoctail(getApiCoctail.data.drinks);
  };
  useEffect(() => {
    api();
  }, []);

  const mealProduct = id => {
    console.log(id);
  };
  const coctailProduct = id => {
    console.log(id);
  };

  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          color: 'black',
          fontStyle: 'italic',
        }}>
        Meals of the day
      </Text>
      {/*<TouchableOpacity
        style={{
          marginTop: 20,
          width: 200,
          height: 50,
          backgroundColor: 'black',
          padding: 10,
          alignItems: 'center',
          borderRadius: 20,
        }}
        onPress={() => props.navigation.navigate('Perfil')}>
        <Text style={{color: 'snow', fontSize: 20}}>View Profile</Text>
      </TouchableOpacity>*/}
      <ScrollView style={{flex: 1, marginTop: 15}} horizontal={true}>
        {data.map(meal => (
          <View key={meal.idMeal}>
            <Text style={{textAlign: 'center'}}>{meal.strMeal} </Text>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => mealProduct(meal.idMeal)}>
                <Image
                  style={{flexDirection: 'row', width: 200, height: 200}}
                  source={{uri: meal.strMealThumb}}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          color: 'black',
          fontStyle: 'italic',
        }}>
        Cocktails
      </Text>
      <ScrollView style={{flex: 1, marginTop: 15}} horizontal={true}>
        {coctail.map(meal => (
          <View key={meal.idDrink}>
            <Text style={{textAlign: 'center'}}>{meal.strDrink} </Text>
            <View style={styles.container}>
              <TouchableOpacity onPress={() => coctailProduct(meal.idDrink)}>
                <Image
                  style={{flexDirection: 'row', width: 200, height: 200}}
                  source={{uri: meal.strDrinkThumb}}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
