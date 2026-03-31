import {useState} from "react";
import {View,Text,Button,StyleSheet,Modal} from "react-native";


const ModalComponent =()=>{
const [show, SetShow]=useState(false);
return (
    <View style={styles.container}>
<Modal visible={show} transparent={true}>
<View style={styles.modalparent}>     
<View style={styles.modalview}>
<Text> Welcome to Modal demo</Text>
<Button title="Close" onPress={()=>SetShow(false)}/>
</View>

</View>

</Modal>


<Button title="Show Modal" onPress={()=>SetShow(true)} />


    </View>
)


}
export default ModalComponent;
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"flex-end",

        },
        modalparent:{
            // backgroundColor:"green",
            justifyContent:"center",
            flex:1,
            alignItems:"center",
            borderRadius:10,


        },
        modalview:{
            color:"#fff",
            justifyContent:"center",
            alignItems:"center",
            gap:20,
            height:200,
            width:250,
            borderRadius:20,
            elevation:5,
            shadowColor:"#eb9898",

        }
    }
)

