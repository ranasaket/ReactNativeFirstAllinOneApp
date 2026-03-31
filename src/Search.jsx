import {useNavigation} from '@react-navigation/native';
import {Button,Text,View} from  'react-native';

function Searchpage({route}) {
  const navigation = useNavigation();
  // console.log("route in search--------",route?.params);
const name=route?.params?.name;
const age=route?.params?.age
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
    </View>
  );
}

export default Searchpage;
