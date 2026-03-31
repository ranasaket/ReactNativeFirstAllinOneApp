import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import AcitivityLoader from "./ActivityLoaderScreen";
import FlatListComponent from './FlatListScreen';
import MapFnDemoComponent from "./MapFnDemo"
import {} from "@react-navigation/native"
const Tab=createMaterialTopTabNavigator();



const TopTabNavigation =()=>{
return(
    // <NavigationContainer> will not use here as already used in parent App.tsx
<Tab.Navigator>
<Tab.Screen name="AcitivityLoader" component={AcitivityLoader} options={{title:"Activity Loader"}}/>
<Tab.Screen name="Flatlist" component={FlatListComponent} options={{title:"FlatList"}}/>
<Tab.Screen name="MapFnDemo" component={MapFnDemoComponent} options={{title:"Map Function Demo"}}/>

</Tab.Navigator>

    // </NavigationContainer>
)

}

export default TopTabNavigation;