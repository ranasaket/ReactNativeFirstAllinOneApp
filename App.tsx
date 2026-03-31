
import { StatusBar, StyleSheet, View ,Text,Button} from 'react-native';
import Homepage from "./src/Home";
import AcitivityLoader from "./src/ActivityLoaderScreen";
import ProfileScreen from "./src/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createStaticNavigation} from '@react-navigation/native';
import Searchpage from './src/Search';
import Loginpage from './src/Login';
import RadioButtonComponent from './src/RadioButton';
import FlatListComponent from './src/FlatListScreen';
import ModalComponent from './src/ModalScreen';
import ReactnativeComponent from './src/ReactNativeDoc';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from "./src/TabNavigationComponent";
import TopTabNavigation from './src/TopTabNavigationScreen';
import MapFnDemoComponent from "./src/MapFnDemo";

// const RootStack = createNativeStackNavigator({
//   screens: {
//     Home: {
//       screen: Homepage,
//       options: {title: 'Welcome'},
//     },
//     Profile: {
//       screen: ProfileScreen,
//     },
//     Search:{
//       screen:Searchpage,
//     },
//     Login :{
//       screen:Loginpage,
//     },
//     RadioButtonComponent:
//     {
//       screen:RadioButtonComponent,
//       options:{title:'Radio Button Component Demo'}
//     },
//     FlatListComponent:
//     {
//       screen:FlatListComponent,
//       options:{title:'Flat List Component Demo'}
//     },
//     AcitivityLoader:{
//       screen:AcitivityLoader,
//       options:{title:'Activity Loader Component Demo'}
//     },
//     ModalComponent:{
//       screen:ModalComponent,
//       options:{title:"Modal demo"}
//     },
//     ReactnativeComponent:{
//       screen:ReactnativeComponent,
//       options:{title:"Web View Demo"}
//     }
//   },


// });

// const Navigation = createStaticNavigation(RootStack);

// export default function App() {
//   return <Navigation />;
// }
// 2nd way to create stack navigator


const Stack = createNativeStackNavigator();
const App =()=>{
return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Homepage}
      options={{title:'Welcome',headerStyle:{backgroundColor:'#f4511e'},headerTintColor:'white',headerTitleStyle:{fontWeight:'bold',fontSize:30}}}
    />
    <Stack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        title:"Profile",
        headerTitle:()=><Button title="Profile Button" />,
        headerRight:()=><Button title="Exit"/>

      }}
    />
    <Stack.Screen
      name='Search'
      component={Searchpage}
    />
    <Stack.Screen
      name='Login'
      component={Loginpage}
    />
    <Stack.Screen
      name='RadioButtonComponent'
      component={RadioButtonComponent}
      options={{title:'Radio Button Component Demo'}}
    />
    <Stack.Screen
      name='FlatListComponent'
      component={FlatListComponent}
      options={{title:'Flat List Component Demo'}}
    />
    <Stack.Screen
      name='AcitivityLoader'
      component={AcitivityLoader}
      options={{title:'Activity Loader Component Demo'}}
    />
    <Stack.Screen
      name='ModalComponent'
      component={ModalComponent}
      options={{title:"Modal demo"}}
    />
    <Stack.Screen 
      name='ReactnativeComponent'
      component={ReactnativeComponent}
      options={{title:"Web View Demo"}}
    />
    <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{title:"Tab navigation Demo"}}
    />
    <Stack.Screen
      name="TopTabNavigation"
      component={TopTabNavigation}
      options={{title:"Top Tab navigation Demo"}}
    />
    <Stack.Screen
      name="MapFnDemoComponent"
      component={MapFnDemoComponent}
      options={{title:"Map Function Demo"}}
    />
   </Stack.Navigator> 
</NavigationContainer>
);

}

export default App; 