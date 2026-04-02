import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';

const FormValidationDemoComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [nameError, setnameError] = useState(false);
  const [cityError, setcityError] = useState(false);
  const [emailError, setemailError] = useState(false);

  const checkValidation = async() => {
    if (!name) {
      setnameError(true);
    } else {
      setnameError(false);
    }

    if (!email) {
      setemailError(true);
    } else {
      setemailError(false);
    }

    if (!city) {
      setcityError(true);
    } else {
      setcityError(false);
    }
    if (!name || !city || !email) {
      return false;
    }
    else{
        const url="http://10.0.2.2:3000/users";
        let result= await fetch(url,{method:"post",      
            headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,city})
    })
 result=await result.json();
 console.warn("data save succefully");
    }
  };

  return (
    <View style={style.container}>

      <Text style={{ fontSize: 18, fontWeight: 800, marginBottom: 20,marginTop:20 }}>
        Basic Validation Demo
      </Text>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
        style={[style.textinput, { borderColor: nameError ? 'red' : 'green' }]}
        placeholderTextColor='green'
      ></TextInput>
      {nameError ? <Text style={style.errortext}>Something wrong with name</Text> : null}
      <TextInput
        placeholder="Enter Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={[style.textinput, { borderColor: emailError ? 'red' : 'green' }]} placeholderTextColor='green'
      ></TextInput>
      {emailError ? <Text style={style.errortext}>Something wrong with Email</Text> : null}

      <TextInput
        placeholder="Enter city"
        value={city}
        onChangeText={text => setCity(text)}
        style={[style.textinput, { borderColor: cityError ? 'red' : 'green' }]}
        placeholderTextColor='green'
      ></TextInput>
      {cityError ? <Text style={style.errortext}>Something wrong with City</Text> : null}

      <Pressable
        onPress={checkValidation}
        style={{
          width: '80%',
          backgroundColor: 'gray',
          color: 'white',
          height: 40,
          justifyContent: 'center',
          flexDirection:"column",
          alignItems: 'center',
          borderRadius:10,
        }}
      >
        <Text style={{ color: 'white',justifyContent: 'center', 
          alignItems: 'center',padding:10,fontSize:17 }}>Save</Text>
      </Pressable>

    </View>
  );
};

export default FormValidationDemoComponent;

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:"red",
    margin: 5,
    backgroundColor: '#b9b973',
    alignItems: 'center',
  },
  textinput: {
    margin: 5,
    width: '80%',
    borderRadius:10,
    borderWidth: 1,
    marginBottom:10
    
  },
  errortext: {
    color: 'red',
    fontSize: 15,
  },
});
