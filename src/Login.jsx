import { StyleSheet, View, Text, TextInput, Button,Image ,TouchableOpacity,Pressable,ScrollView} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Loginpage = () => {
  const [name, setUsername] = useState('');
  const [greeting, setGreeting] = useState('');
  const [age, setAge] = useState('33');
  const navigation = useNavigation();
  function handleLogin(){
setGreeting(name);
// setUsername('');

  }


  return (
    <ScrollView style={{backgroundColor:"#0c0b0ba7",height:1000}}>
      <Text style={{fontSize:45,fontWeight:800,color:"white"}}>This is Login Page</Text>
      <Image src="https://cdn.pixabay.com/photo/2025/09/19/05/48/mountain-range-9842371_1280.jpg"  style={{width: 300, height: 300,padding:5,margin:10}}></Image>
      
      
      <TextInput style={{color:"white",borderColor:"black",borderRadius:10,borderStyle:'solid',borderWidth: 1,padding:10,margin:10}}
        value={name}
        placeholderTextColor="white"
        keyboardType="numeric-pad"
        secureTextEntry={true}
        placeholder="Enter Username"
        onChangeText={setUsername}
      ></TextInput>

      <Button
        title="Login"
        onPress={() => {
          handleLogin();
        }}
        style={{width:20,height:200}}
      ></Button>

      <Text style={{color:"white",fontSize:15,marginTop:25}}> User {name} Logged in</Text>
     {name !== "" && (
// For some properties of button that can't be changed.So we use another component
// <Button
//       title={`Go to ${name} profile`}
//       onPress={() => navigation.navigate('Profile', { name, age })}
//     />
/* <TouchableOpacity
  style={{
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 10,
    margin: 10,
    
  }}
  onPress={() => navigation.navigate('Profile', { name, age })}

>
  <Text style={{ color: 'white', fontSize: 16 }}>
    {`Go to ${name}` }
  </Text>
</TouchableOpacity>
*/
      

<Pressable style={{ padding: 10, backgroundColor: 'green' }} onPress={() => navigation.navigate('Profile', { name, age })}>
  <Text style={{ color: 'white' }}> {`Go to ${name}` }</Text>
</Pressable>
)} 
    </ScrollView>
  );
};

export default Loginpage;
