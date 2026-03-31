import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Homepage from "./Home";
import FlatListComponent from './FlatListScreen';
import ApiScreenComponent from './ApiScreen';

const Tab=createBottomTabNavigator();



const TabNavigation =()=>{
return(
    // <NavigationContainer> 

<Tab.Navigator>
<Tab.Screen name="Home" component={Homepage} options={{title:"Home"}}/>
<Tab.Screen name="Flatlist" component={FlatListComponent} options={{title:"FlatList"}}/>
<Tab.Screen name="ApiScreenComponent" component={ApiScreenComponent} options={{title:"Api Demo"}}/>

</Tab.Navigator>

// </NavigationContainer>
)

}

export default TabNavigation;