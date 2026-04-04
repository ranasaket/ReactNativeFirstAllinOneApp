import { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Modal,TextInput } from 'react-native';

const JsonServerCrudComponent = () => {
  const [data, setData] = useState([]);
  const [showmodal, setShowModal] = useState(false);
  const [selecteduser, setSelectedUser] = useState();

  //Get data from API
  const getData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    // console.warn('data: ', result);
    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);

  //Delete function
  const deleteData = async id => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    getData();
  };

  //Load user data
  const loadUserData = (data) => {

    setShowModal(true);
    setSelectedUser(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataWrapper}>
        <Text style={{ fontSize: 18, fontWeight: 800, flex: 1 }}>Name</Text>
        <Text style={{ fontSize: 18, fontWeight: 800, flex: 1 }}>Email</Text>
        <Text style={{ fontSize: 18, fontWeight: 800, flex: 1 }}>City</Text>
        <Text style={{ fontSize: 18, fontWeight: 800, flex: 2 }}>Actions</Text>
      </View>
      {data.length ? (
        data.map(item => (
          <View key={item.id} style={styles.dataWrapper}>
            <Text style={{ color: 'white' }}>{item.name}</Text>
            <Text style={{ color: 'white' }}>{item.email}</Text>
            <Text style={{ color: 'white' }}>{item.city}</Text>
            <Button title="Update" onPress={() => loadUserData(item)} />
            <Button title="Delete" onPress={() => deleteData(item.id)} />
          </View>
        ))
      ) : (
        <Text>Nothing to show..</Text>
      )}
      <Modal visible={showmodal} transparent={true}>
        <UserModal selecteduser={selecteduser} setShowModal={setShowModal} getData={getData} />
      </Modal>
    </View>
  );
};

const UserModal = ({ selecteduser, setShowModal, getData}) => {
    const [name,setName]=useState(undefined);
    const [email,setEmail]=useState(undefined);
    const [city,setCity]=useState(undefined);
  useEffect(()=>{
    if (selecteduser){
      setName(selecteduser?.name)
      setEmail(selecteduser?.email)
      setCity(selecteduser?.city)
    }
  },[selecteduser])
const UpdateUser = async()=>
{
const id = selecteduser?.id;
const url ='http://10.0.2.2:3000/users';
let result = await fetch(`${url}/${id}`,{
  method:"Put",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({name,email,city})
});
result = await result.json();
if (result){
  setShowModal(false);
  getData();
}

}
    return (
    <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>User Details</Text>
        <TextInput placeholder="Enter name" value={name} style={styles.textinput} onChangeText={(text)=>setName(text)}></TextInput>
        <TextInput placeholder="Enter email" value={email} style={styles.textinput}  onChangeText={(text)=>setEmail(text)}></TextInput>
        <TextInput placeholder="Enter city" value={city} style={styles.textinput}  onChangeText={(text)=>setCity(text)}></TextInput>
        {/* <Text style={styles.modalText}>Name: {selecteduser?.name}</Text>
        <Text style={styles.modalText}>Email: {selecteduser?.email}</Text>
        <Text style={styles.modalText}>City: {selecteduser?.city}</Text> */}

        <View style={{ marginTop: 20 }}>
          <Button title="Close" onPress={() => setShowModal(false)} />
          <Button title="Update" onPress={()=>UpdateUser()} />
        </View>
      </View>
    </View>
  );
};
export default JsonServerCrudComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 2,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    backgroundColor: 'orange',
    borderWidth: 1,
  },

  // 🔥 NEW MODAL STYLES
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // dark background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    elevation: 10, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  textinput:{
    borderWidth:2,
    marginBottom:5,
    borderColor:"green"
  }
});
