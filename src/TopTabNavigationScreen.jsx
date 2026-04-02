import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import AcitivityLoader from "./ActivityLoaderScreen";
import FlatListComponent from './FlatListScreen';
import MapFnDemoComponent from "./MapFnDemo";
import ApiFlatlistComponent from "./ApiFlatlistScreen";
import FormValidationDemoComponent from "./FormBasicValidation";
const Tab=createMaterialTopTabNavigator();



const TopTabNavigation =()=>{
return(
    // <NavigationContainer> will not use here as already used in parent App.tsx
<Tab.Navigator>
<Tab.Screen name="AcitivityLoader" component={AcitivityLoader} options={{title:"Activity Loader"}}/>
<Tab.Screen name="Flatlist" component={FlatListComponent} options={{title:"FlatList"}}/>
<Tab.Screen name="MapFnDemo" component={MapFnDemoComponent} options={{title:"Map Function Demo"}}/>
<Tab.Screen name="ApiFlatlistDemo" component={ApiFlatlistComponent} options={{title:"Api with Flatlist Demo"}}/>
<Tab.Screen name="FormValidationDemoComponent" component={FormValidationDemoComponent} options={{title:"Form Validation Demo"}}/>

</Tab.Navigator>

    // </NavigationContainer>
)

}

export default TopTabNavigation;