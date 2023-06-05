import { StyleSheet, View, Image, Pressable } from 'react-native';

import PropTypes from 'prop-types';
const Icecream = (props) => {

  
  var iceName = '슈파두바';
  var iceSrc= require('../../assets/img/ice01.png');
  switch (props.iceType) {
    case 'ice01':
      iceSrc= require('../../assets/img/ice01.png');
      iceName = '이거먹으면나랑사귀는바';
      break;
    case 'ice02':
      iceSrc= require('../../assets/img/ice02.png');
      iceName = '이거먹으면에이쁠받는바';
      break;
    case 'ice03':
      iceSrc= require('../../assets/img/ice03.png');
      iceName = '이거먹으면안돼바';
      break;
    case 'ice04':
      iceSrc= require('../../assets/img/ice04.png');
      iceName = '흑마법사가만든저체온증바';
      break;
    case 'ice05':
      iceSrc= require('../../assets/img/ice05.png');
      iceName = '쿨복숭아쌍쌍바';
      break;
    case 'ice06':
      iceSrc= require('../../assets/img/ice06.png');
      iceName = '초콜릿태닝쌍쌍바';
      break;
    case 'ice07':
      iceSrc= require('../../assets/img/ice07.png');
      iceName = '물고기도반한에어콘';
      break;
    case 'ice08':
      iceSrc= require('../../assets/img/ice08.png');
      iceName = '여름이온지얼마나오렌지콘';
      break;
    case 'ice09':
      iceSrc= require('../../assets/img/ice09.png');
      iceName = '베리베리더워콘';
      break;

  }
  const confingTest = () => {
    console.log(iceName);
  }
  return (
    <View>
      <Pressable onPress={() => confingTest()}>
        <Image source={iceSrc} style={styles.ice} />
      </Pressable>
    </View>
  );
};
Icecream.propTypes = {
  iceType: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  ice: {

    marginHorizontal: 15,
    marginVertical: -60,
    width: 70,
    resizeMode: 'contain',
  }


});
export default Icecream;

