import { StyleSheet, View } from 'react-native';
import BackBtn from '../components/BackBtn';
import Title from '../components/Title';
import Explanation from '../components/Explanation';
import ConfigBtn from '../components/ConfigBtn';
import Icecream from '../components/Icecream';

const SelectIcecream = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop1}>
        <BackBtn src='prevPage source'></BackBtn>
      </View>
      <View style={styles.containerTop2}>

        <Title title='아이스크림 선택'></Title>
        <Explanation nickname='우직한머슴' contents='에게 어떤 아이스크림을 보낼까?'></Explanation>
      </View>
      <View style={styles.containerMid}>
        <View style={styles.containerMidInner}>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice01'} />
            <Icecream iceType={'ice02'} />
            <Icecream iceType={'ice03'} />
          </View>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice04'} />
            <Icecream iceType={'ice05'} />
            <Icecream iceType={'ice06'} />
          </View>
          <View style={styles.containerIce}>
            <Icecream iceType={'ice07'} />
            <Icecream iceType={'ice08'} />
            <Icecream iceType={'ice09'} />
          </View>

        </View>
      </View>
      <View style={styles.containerBottom}>
        <ConfigBtn title='선택완료' ></ConfigBtn>
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