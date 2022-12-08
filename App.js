import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '50%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    height: 50,
    width: 200,
    marginLeft: 20,
    textAlign: 'center',
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: "center",
    paddingBottom: 30,
  }
});

function LoginScreen({navigation}) {
  const [email, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>THIEA</Text>

      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="user"
          placeholderTextColor="#003f5c"
          onChangeText ={(user) => setUser(user)}
        />
      </View>
        <View style={styles.inputView}>
          <TextInput 
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText ={(password) => setPassword(password)}
          />
        </View> 
        <Button 
        style={styles.loginText}
        title="LOGIN"
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>THIEA</Text>

      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Current Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(user) => setUser(user)}
        />
      </View>
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
