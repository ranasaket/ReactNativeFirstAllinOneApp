import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';

const AcitivityLoader = () => {
  const [show, SetShow] = useState(false);

const setLoader=()=>{
    SetShow(true);

    setTimeout(()=>{
        SetShow(false)
    },3000);
}

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b9b2b2',
      }}
    >
      <ActivityIndicator size="400" color="#0000ff" animating={show} />

      <Text style={{ color: '#000', fontSize: 45, fontWeight: '600',display: show ? "flex" : "none"}}>
        Loading...
    
      </Text>

      <Button title="Start Loader" onPress={() => setLoader()} />
    </View>
  );
};

export default AcitivityLoader;
