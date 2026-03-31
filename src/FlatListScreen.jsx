import {Text,View,FlatList,StyleSheet} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const FlatListComponent = () => {

    return (
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"lightblue"}}>
            <FlatList data={DATA} renderItem={({item}) => <Text style={{fontSize:20,fontWeight:"bold"}}>{item.title}</Text>} keyExtractor={item => item.id} />
{/* Or */}
<FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        </View>
    )
}
export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
