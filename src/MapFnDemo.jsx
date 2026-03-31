import {View,Text,ScrollView,Image} from 'react-native';


const products=[
{
"id":1,
"name":"Product contains at least 95% organic material",
"image_url":"https://m.media-amazon.com/images/I/71U3wxOoQHL._AC_UL320_.jpg",
"price":"Rs.14"
},
{
"id":2,
"name":"Maxwell House Original Roast Ground Coffee, 33.1 oz Canister",
"image_url":"https://m.media-amazon.com/images/I/81-XszCdVXL._AC_UL320_.jpg",
"price":"Rs.15"
},
{
"id":3,
"name":"Amazon Fresh, Colombia Ground Coffee, Medium Roast, 32 Oz",
"image_url":"https://m.media-amazon.com/images/I/71AkGIlaV7L._AC_UL320_.jpg",
"price":"Rs.17"
},
{
"id":4,
"name":"Maxwell House 28.4oz Ground Coffee Medium Wake Up Roast",
"image_url":"https://m.media-amazon.com/images/I/71tVYMZlkpL._AC_UL320_.jpg",
"price":"Rs.20"

},
{
"id":5,
"name":"Lavazza Espresso Whole Bean Coffee, Medium Roast, 100% Arabica, 2.2 lb Bag (Pack of 1)",
"image_url":"https://m.media-amazon.com/images/I/61oeFSnXatL._AC_UL320_.jpg",
"price":"Rs.17.14"
}
]


const MapFnDemoComponent =()=>{
    return(
        
        <ScrollView>
            <View style={{flexDirection:"row", justifyContent:"center",alignContent:"center", marginTop:15}}> 
<Text style={{fontSize:25,fontWeight:800,marginBottom:20}} >Amazon Product</Text>
</View>
<View style={{
  flexDirection: "row",
  flexWrap: "wrap",
  gap:15,
  padding:2,
  margin:5,
  alignItems:"center",
    // justifyContent: "center",

}}>
  {products.map((item) => (
    <View
      key={item.id}
      style={{
        width: "30%",
        backgroundColor: "#ddc3c3fb",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        padding: 10,
        borderRadius: 20
      }}
    >
      <Image
        source={{ uri: item.image_url }}
        style={{ width: 100, height: 100, borderRadius: 5 }}
      />

      <Text style={{ fontSize: 10, fontWeight: '600', marginVertical: 5 }}>
        {item.name}
      </Text>

      <Text style={{ fontSize: 15, fontWeight: '500' }}>
        {item.price}
      </Text>
    </View>
  ))}
</View>
{/* <View style={{backgroundColor:"#ddc3c3fb",flex:1,justifyContent:"center",alignItems:"center", margin:10,padding:10,borderRadius:20,width:120,borderColor:"red",shadowRadius:10,shadowColor:"black",shadowOpacity:1}}>
    <Image src="https://m.media-amazon.com/images/I/61oeFSnXatL._AC_UL320_.jpg" width={100} height={100} style={{borderRadius:5}}></Image>
<Text style={{fontSize:10,fontWeight:600,marginBottom:20,marginTop:5}}>Maxwell House 28.4oz Ground Coffee Medium Wake Up Roast</Text>
<Text style={{fontSize:15,fontWeight:500,flex:1}}>Rs.20</Text>
</View> */}


        </ScrollView>
    )
}

export default MapFnDemoComponent;