import {useNavigation} from '@react-navigation/native';
import {Button,Text,View,TextInput} from  'react-native';
import {useState} from "react";

// according to documentation
// GET /posts?views:gt=100
// GET /posts?title:eq=Hello
// GET /posts?id:in=1,2,3
// GET /posts?author.name:eq=typicode
// GET /posts?title:contains=hello
// GET /posts?title:startsWith=Hello
// GET /posts?title:endsWith=world


function Searchpage({route}) {
  const navigation = useNavigation();
  // console.log("route in search--------",route?.params);
const name=route?.params?.name;
const age=route?.params?.age
const [data,SetData]=useState([]);
const getData = async(text)=>{
   if (!text) {
    SetData([]);
    return;
  }
  const url = 'http://10.0.2.2:3000/users';
  let result  = await fetch(`${url}?name:contains=${text}`);
  result=await result.json();
  if (result){
    SetData(result);
  }

}

return (
    <View> 
    <Text>This is Search page</Text>
    <Button
      title={`Go to ${name} profile`}
 onPress={() => navigation.navigate('Profile',{name,age})
      }
    />
    <Button
      title={`Go to Home page`}
 onPress={() => navigation.navigate('Home',{name,age})
      }
    />

    <View style={{marginTop:10 ,justifyContent:"center"}}>
      <Text style = {{fontSize:25,}}>Student Data</Text>
<TextInput placeholder='Enter name for search'  onChangeText={(text)=>getData(text)} style={{borderWidth:1,borderColor:"green",marginBottom:10,marginTop:15}} />

{data.length?data.map((item)=><View key={item.id}>
<Text style={{fontSize:15,fontWeight:800,color:"red"}}>{item.name}</Text>
<Text style={{fontSize:15,fontWeight:800,color:"red"}}>{item.email}</Text>
<Text style={{fontSize:15,fontWeight:800,color:"red"}}>{item.city}</Text>
</View>):null}


    </View>
    </View>
  );
}

export default Searchpage;
