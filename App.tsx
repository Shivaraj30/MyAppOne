import React from 'react';
import{
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

function App(){
  return(
   
     

    <View
    style={[
      styles.container,
      {
        flexDirection: 'column',
      },
      

    ]}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />


      <Text style={styles.text}>Hello Shivaraj!</Text>
      <Button title="Press me"
        onPress={()=> Alert.alert('Button Pressed')} ></Button>

    </View>


   
 
  );
};


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    marginLeft:16,
  },
  text : {
    fontSize: 20,
  },
  container2: {
    marginTop:50,
    marginLeft:16,
  }
})
