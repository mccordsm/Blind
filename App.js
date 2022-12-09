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
    flexDirection: "column",
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '50%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  destView: {
    backgroundColor: '#FF0F56',
    borderRadius: 30,
    width: '50%',
    height: 45,
    marginBottom: 5,
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
    fontSize: 50,
    alignItems: "center",
    paddingBottom: 100,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: "center",
    paddingBottom: 10,
  },
  loginText: {
    marginBottom: 20,
    padding: 30
  },
  pushText: {
    marginBottom: 20,
    padding: 30,
  },
  emergText: {
    marginBottom: 50,
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
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
          style={styles.pushText}
          title="Push To Talk"
        />
        <View style={styles.space} />
        <Button 
        style={styles.loginText}
        title="LOGIN"
        onPress={() => navigation.navigate('Home')}
        />
        <View style={styles.space} />
        <Button 
        style={styles.loginText}
        title="Create Account"
        onPress={() => navigation.navigate('Create')}
        />
    </View>
  );
}

function HomeScreen({navigation}) {
  const [Destination, setDestination] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button 
      style={styles.emergText}
      title="Emergency Services"
      onPress={() => navigation.navigate('Emergency')}
      />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <Text style={styles.title}>THIEA</Text>

      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Current Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Destination) => setDestination(Destination)}
        />
      </View>
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Library"
      onPress={() => navigation.navigate('Library')}
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Begin Navigation"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="End Navigation"
      onPress={() => navigation.navigate('Final')}
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Log Out"
      onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function LibraryScreen({navigation}) {
  const [Favorite1, setFavorite1] = useState('');
  const [Favorite2, setFavorite2] = useState('');
  const [Favorite3, setFavorite3] = useState('');

  const [Recent1, setRecent1] = useState('');
  const [Recent2, setRecent2] = useState('');
  const [Recent3, setRecent3] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button 
      style={styles.emergText}
      title="Emergency Services"
      onPress={() => navigation.navigate('Emergency')}
      />
      <View style={styles.space} />
      <Text style={styles.title}>THIEA</Text>
      <Text style={styles.subTitle}>Recent Destinations</Text>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Recent Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Recent1) => setRecent1(Recent1)}
        />
      </View>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Recent Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Recent2) => setRecent2(Recent2)}
        />
      </View>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Recent Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Recent3) => setRecent3(Recent3)}
        />
      </View>
      <View style={styles.space} />
      <Text style={styles.subTitle}>Favorite Destinations</Text>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Favorite Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Favorite1) => setFavorite1(Favorite1)}
        />
      </View>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Favorite Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Favorite2) => setFavorite2(Favorite2)}
        />
      </View>
      <View style={styles.destView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Favorite Destination"
          placeholderTextColor="#003f5c"
          onChangeText ={(Favorite3) => setFavorite3(Favorite3)}
        />
      </View>
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Home"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function CreateScreen({navigation}) {
  const [user, setUser] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [ZIP, setZIP] = useState('');
  const [emergency, setEmergency] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>THIEA</Text>

      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="User Name"
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
      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          onChangeText ={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText ={(phone) => setPhone(phone)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="ZIP"
          placeholderTextColor="#003f5c"
          onChangeText ={(ZIP) => setZIP(ZIP)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Emergency Number"
          placeholderTextColor="#003f5c"
          onChangeText ={(emergency) => setEmergency(emergency)}
        />
      </View>
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Login"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function FinalScreen({navigation}) {
  return (
    <View style={{ flex: 1,backgroundColor:"#fff", alignItems: 'center', justifyContent: 'center' }}>
      <Button 
      style={styles.emergText}
      title="Emergency Services"
      onPress={() => navigation.navigate('Emergency')}
      />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <Text style={{fontSize: 20, fontWeight: "bold",}}>Destination Reached/Ended</Text>
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Library"
      onPress={() => navigation.navigate('Library')}
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Return Home"
      onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function EmergencyScreen({navigation}) {
  return (
    <View style={{ flex: 1,backgroundColor:"#fff", alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <View style={styles.space} />
      <Text style={{fontSize: 30, fontWeight: "bold",}}>Fall Detected/Location Lost!!</Text>
      <View style={styles.space} />
      <Text style={{fontSize: 20, fontWeight: "bold",}}>Calling in 10 Seconds</Text>
      <Text style={{fontSize: 20, fontWeight: "bold",}}>(425)123-5555</Text>
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Push To Talk"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Stop Emergency"
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Library"
      onPress={() => navigation.navigate('Library')}
      />
      <View style={styles.space} />
      <Button 
      style={styles.loginText}
      title="Return Home"
      onPress={() => navigation.navigate('Home')}
      />
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
        <Stack.Screen name="Final" component={FinalScreen} />
        <Stack.Screen name="Library" component={LibraryScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
