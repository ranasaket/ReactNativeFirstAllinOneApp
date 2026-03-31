import { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

const ApiScreenComponent = () => {
  const [data, setData] = useState([]);

  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', margin: 10 }}>
        API Demo
      </Text>

      <ScrollView>
        {data.map(item => (
          <View
            key={item.id}
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: '#eee',
              borderRadius: 10,
            }}>
            <Text>Id: {item.id}</Text>
            <Text>UserId: {item.userId}</Text>
            <Text>Title: {item.title}</Text>
            <Text>Body: {item.body}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ApiScreenComponent;