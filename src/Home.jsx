import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text,View,Platform,ScrollView } from 'react-native';

function Homepage(route) {

  const navigation = useNavigation();
  const platformText = Platform.OS === "android" ? "Android" : "iOS";
  return (
    <ScrollView> 
    <View style={{flex:1,justifyContent:"center","alignItems":"center",alignContent:"center",flexDirection:"column",gap:25,backgroundColor:"rgba(255, 255, 255, 0.6)"}}> 
{Platform.OS=="android"? <Text style={{fontSize:25,fontWeight:800}}>Welcome to the home Screen(Android)</Text>:<Text style={{fontSize:25,fontWeight:800,}}>Welcome to the home Screen(IOS)</Text> }


<Text style={{ fontSize: 25, fontWeight:'800' }}>
  Welcome to the home Screen for {platformText} (Shortcut way)
</Text>
<Text>{JSON.stringify(Platform)}</Text>

    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('Login')}
    />

    <Button
      title="Go to Radio Button Component"
      onPress={() => navigation.navigate('RadioButtonComponent')}
    />
    <Button
      title="Go to FlatList Button Component"
      onPress={() => navigation.navigate('FlatListComponent')}
    />

<Button title="Go to Webview demo" onPress={()=> navigation.navigate('ReactnativeComponent')}></Button>
<Button title="Go to Tab demo" onPress={()=> navigation.navigate('TabNavigation')}></Button>
<Button title="Go to Top Tab demo" onPress={()=> navigation.navigate('TopTabNavigation')}></Button>
<Button title="Go to Activity Indicator Demo"  onPress={()=>navigation.navigate('AcitivityLoader')}/>
<Button title="Go to Modal demo" onPress={()=> navigation.navigate('ModalComponent')}></Button>
</View>
</ScrollView>
  );
}

export default Homepage;
