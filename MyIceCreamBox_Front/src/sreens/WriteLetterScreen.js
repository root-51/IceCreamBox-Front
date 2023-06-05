import { StyleSheet, View } from 'react-native';
import BackBtn from '../components/BackBtn';
import Title from '../components/Title';
import Explanation from '../components/Explanation';
import ConfigBtn from '../components/ConfigBtn';
import RedBorderBox from '../components/RedBorderBox'; import { useState } from 'react';
const WriteLetterScreen = () => {
  const [writer, setWriter] = useState('');
  const [letter, setLetter] = useState('');
  const letterTest = () => {
    console.log(writer)
    console.log(letter)
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn src='prevPage source'></BackBtn>
      </View>
      <View style={styles.containerTop2}>

        <Title title='아이스크림 선택'></Title>
        <Explanation nickname='우직한머슴' contents='에게 아이스크림과 함께 전할 말이 있나요?'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <RedBorderBox type='img' style={styles.minItem}></RedBorderBox>
        <RedBorderBox
          type='TextField'
          style={styles.minItem}
          value={writer}
          onChangeText={(text) => setWriter(text)}  // 수정된 부분
        >
        </RedBorderBox>
        <View style={{ width: '100%' }}>
          <RedBorderBox
            type='TextArea'
            style={styles.minItem}
            value={letter}
            onChangeText={(text) => setLetter(text)}  // 수정된 부분
          ></RedBorderBox>
        </View>

      </View>

      <View style={styles.containerBottom}>
        <ConfigBtn title='보내기' onPress={letterTest}></ConfigBtn>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',

  },
  containerTop1: {
    flex: 1.5,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',

  },
  containerTop2: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerMid: {
    flex: 11,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
    marginHorizontal: '3%',

  },
  minItem: {
    flex: 1,

  },

  containerBottom: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default WriteLetterScreen;