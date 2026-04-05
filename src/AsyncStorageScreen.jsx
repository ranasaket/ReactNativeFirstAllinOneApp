import {Button,Text,View} from  'react-native';
import AsyncStorage  from "@react-native-async-storage/async-storage";
import { useState } from 'react';
const AsyncStorageComponent =()=>
{
const [user,setUser] = useState();

const setData =async()=>{
await AsyncStorage.setItem("user","saket rana")

}
const getData =async()=>{
const name =await AsyncStorage.getItem("user")
setUser(name);
}
const removeData = async()=>
{
    await AsyncStorage.removeItem("user");
setUser("");

}

return (
    <View>
        <Text>Saved Data:{user}</Text>
        <Button title='Set Data' onPress={setData} />
        <Button title='Get Data' onPress={getData} />
        <Button title='Remove Data' onPress={removeData} />

    </View>
)
}

export default AsyncStorageComponent;
