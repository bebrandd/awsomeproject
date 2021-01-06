import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//import Login from './components/Login';
const App = () => {
  return (
      <View style={styles.container}>
         <Text>hello app</Text>
      </View>
        )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });
export default App;
