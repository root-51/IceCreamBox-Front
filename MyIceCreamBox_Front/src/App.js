import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';

import WriteLetterScreen from './sreens/WriteLetterScreen'
//import SelectIcecream from './sreens/SelectIcecream'


export default function App() {
  // eslint-disable-next-line no-undef

  return (
    <View style={styles.container}>
      
   
      {/* <SelectIcecream /> */}
      <WriteLetterScreen/>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },


});
