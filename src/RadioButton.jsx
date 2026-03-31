import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const Skills=[
    {
        id:1,
        name:"React"
    },
    {
        id:2,
        name:"JavaScript"
    },
    {
        id:3,
        name:"TypeScript"
    },
    {
        id:4,
        name:"Python"
    }
]

const RadioButtonComponent = () => {
  const [selectedOption, SetSelectedOption] = useState(1);
  const [selectedOption2, SetSelectedOption2] = useState(1);
  return (
    <View style={{ flex: 1, alignItems: 'center',justifyContent:"center", flexDirection: 'column' ,backgroundColor:"lightgray" }}>
<Text style={styles.text2}>Static Radio Button</Text>
      
      <TouchableOpacity style={styles.main} onPress={() => SetSelectedOption(1)}>
                
          <View style={styles.radiowrapper}>
            {selectedOption === 1? <View style={styles.radiofill}></View> : null}
          </View>
        

        <Text style={styles.text}>Option1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.main} onPress={() => SetSelectedOption(2)}>

          <View style={styles.radiowrapper}>
        {selectedOption === 2 ? <View style={styles.radiofill}></View> : null}
        
        </View>
        
        <Text style={styles.text}>Option2</Text>
      </TouchableOpacity>
<Text style={styles.text2}>Dynamic Radio Button</Text>
<View>
{ 
Skills.map((item,index)=>
      <TouchableOpacity style={styles.main} 
      onPress={() => SetSelectedOption2(item.id)}
      key={index}
      >

          <View style={styles.radiowrapper}>
        {selectedOption2 === item.id ? <View style={styles.radiofill}></View> : null}
        
        </View>
        
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
)}

</View>


    </View>
  );
};

const styles = StyleSheet.create({
  radiowrapper: {
    width: 20,
    height: 20,
    borderColor:"black",
    borderStyle:'solid',
    borderRadius: 35,
    backgroundColor: 'white',
  },
  radiofill: {
    width: 18,
    height: 18,
    borderRadius: 8,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  main: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  text: {

    color: 'red',
  },
  text2: {
        fontSize: 35,
    fontWeight: 800,
    color: 'black',
  },
});

export default RadioButtonComponent;
