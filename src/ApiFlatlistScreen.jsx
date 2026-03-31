import { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';

const ApiFlatlistComponent = () => {
  const [data, SetData] = useState([]);
  const getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    SetData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: '#aba5a5',
          fontSize: 30,
          fontWeight: 600,
          color: '#ffff',
          flex:1,
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column"
        }}
      >
        FlatList API Data
      </Text>
      <View style={{gap:20,marginBottom:10,margin:5,borderWidth:1,justifyContent:"space-between",alignItems:"center",marginVertical: 8,
    marginHorizontal: 16}}> 
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#fff8f8',
                borderColor: '#e9acac',
                borderWidth: 2,
                padding:10,
                marginBottom: 5,

              }}
            >
              <Text style={{ fontSize: 18,backgroundColor:"yellow" }}>{item.id}</Text>
              <Text style={{ fontSize: 15 }}>{item.title}</Text>
              <Text style={{ fontSize: 12 }}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
      </View>
    </ScrollView>
  );
};

export default ApiFlatlistComponent;
