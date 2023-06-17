import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { useState,useCallback } from 'react';
import { Alert,StyleSheet, View } from 'react-native';
import BackBtn from '../components/BackBtn';
import Title from '../components/Title';
import Explanation from '../components/Explanation';
import NextBtn from '../components/NextBtn';
import Icecream from '../components/Icecream';

const SelectIcecream = () => {

  const navigation = useNavigation();

  const receiverName = '산타할아버지'; // string = props.receiverName
  const [selectedIcecream, setSelectedIcecream] = useState(null);
  const handleIcecreamSelect = (iceType) => {
    setSelectedIcecream(prev => prev === iceType ? null : iceType);
  }
  useFocusEffect(
    // eslint-disable-next-line no-undef
    useCallback(() => {
      // this will be executed when the screen is focused
      setSelectedIcecream(null);
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn type='goToSelectLetter' onPress={() => navigation.navigate('SelectIcecreamPage')}></BackBtn>
      </View>
      <View style={styles.containerTop2}>
        <Title title='아이스크림 선택'></Title>
        <Explanation nickname={receiverName} contents='에게 어떤 아이스크림을 보낼까?'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <View style={styles.containerMidInner}>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice01'} selected={selectedIcecream === 'ice01'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice02'} selected={selectedIcecream === 'ice02'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice03'} selected={selectedIcecream === 'ice03'} onPress={handleIcecreamSelect} />
          </View>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice04'} selected={selectedIcecream === 'ice04'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice05'} selected={selectedIcecream === 'ice05'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice06'} selected={selectedIcecream === 'ice06'} onPress={handleIcecreamSelect} />
          </View>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice07'} selected={selectedIcecream === 'ice07'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice08'} selected={selectedIcecream === 'ice08'} onPress={handleIcecreamSelect} />
            <Icecream iceType={'ice09'} selected={selectedIcecream === 'ice09'} onPress={handleIcecreamSelect} />
          </View>

        </View>
      </View>
      <View style={styles.containerBottom}>
        <NextBtn title='선택완료' type='goToWriteLetter' onPress={() => {
          if (selectedIcecream) {
            navigation.navigate('WriteLetterPage', { receiverName, selectedIcecream })
          } else {
            Alert.alert("아이스크림을 선택해주세요.")
          }
        }} ></NextBtn>
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
    backgroundColor: '#B9F3FC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginHorizontal: '3%',
  },
  containerMidInner: {
    padding: 15,
    backgroundColor: '#AABCCB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: '85%',
    height: '90%',
  },
  containerBottom: {
    flex: 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerIce: {
    flexDirection: 'row',

  },

});

export default SelectIcecream;