import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,  View } from 'react-native';
import { AppLoading } from 'expo';
import Login from './Login';
import MainScreen from './MainScreen';
import axios from './services/AxiosService';


export default function App() {
  const [user, setUser] = useState(null);

  const logOut = () => {
    axios.removeHeaders(['Authorization']);
    setUser(null);
  }

  return (
    <View style={styles.container}>
      {user===null 
      ? (<Login setUser={setUser} />) 
      : (<MainScreen user={user} logOut={logOut} />)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100,
    marginLeft: 50,
    marginRight: 50
  },
});
