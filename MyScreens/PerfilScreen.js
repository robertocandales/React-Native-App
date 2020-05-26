import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

const PerfilScreen = () => {
  const [users, setUsers] = useState([]);
  const apiUser = async () => {
    const api = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(api.data);
    console.log(api);
  };
  useEffect(() => {
    apiUser();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 20}}>Perfil Screen</Text>
      <View style={{flex: 1, justifyContent: 'center', texSize: 20}}>
        {users.map((user, index) => (
          <Text
            style={{marginTop: 10, fontSize: 20, marginLeft: 10}}
            key={index}>
            -Name: {user.name} - email: {user.email}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PerfilScreen;
