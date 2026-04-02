import { useState, useEffect } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';

const PostApiComponent = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const SaveData= async()=>
  {
    const url = "http://10.0.2.2:3000/users"
    let result = await fetch(url,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ 
  name, 
  age: Number(age), 
  city 
})

    });
    result = await result.json();
if(result){
  console.warn("Data Added")
}
    
  }

  return (
    <View>
      <TextInput value={name} placeholder="Enter Name" style={style.input} onChangeText={(text)=>setName(text)} />
      <TextInput value={age} placeholder="Enter Age" style={style.input} keyboardType='numeric' onChangeText={(text)=>setAge(text)} />
      <TextInput value={city} placeholder="Enter city" style={style.input} onChangeText={(text)=>setCity(text)} />
      <Button title="Submit" onPress={SaveData} />
    </View>
  );
};
export default PostApiComponent;

const style = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
});
