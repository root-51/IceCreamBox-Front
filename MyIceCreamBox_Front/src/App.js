import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View } from 'react-native';

// import WriteLetterScreen from './screens/WriteLetterScreen'
//import SelectIcecream from './screens/SelectIcecream'
import ConfigLetterScreen from './sendpage/screens/ConfigLetterScreen'

export default function App() {
  // eslint-disable-next-line no-undef

  return (
    <View style={styles.container}>

      <ConfigLetterScreen></ConfigLetterScreen>
      {/* <SelectIcecream /> */}
      {/* <WriteLetterScreen/> */}
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
