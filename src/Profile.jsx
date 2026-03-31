import {useNavigation} from '@react-navigation/native';
import { View,Button,Text } from 'react-native';


const ProfileScreen = ({route})=> {
 const navigation = useNavigation();
 const name=route?.params?.name
 const age=route?.params?.age
  return (
<View style={{flex:1,justifyContent:"center",flexDirection:"column",alignContent:"center"}}>
    <Text style={{color:'#000',fontSize:45}}>{name}</Text>
    <Text style={{color:'#000',fontSize:45,fontWeight:600}}>Age :{age}</Text>

    <Button
      title="Go to Search page"
 onPress={() =>
        navigation.navigate('Search',{name,age})
      }
    />
</View>
  );
}
export default ProfileScreen;
