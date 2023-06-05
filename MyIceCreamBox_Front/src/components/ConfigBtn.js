import { StyleSheet, View, Text, Pressable } from 'react-native';

import PropTypes from 'prop-types';
const ConfigBtn = (props) => {
  const confingTest = () =>{
    console.log('아이스크림선택-선택완료버튼 선택');
  }
  return (
    <View>
      <Pressable
        onPress={props.onPress}
        style={({ pressed }) => [
          styles.btn,
          pressed && { backgroundColor: '#F3D048'}
        ]}>
        <Text>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};
ConfigBtn.propTypes = {
  title: PropTypes.string,
  onPress:PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

  },
  btn:{
    paddingHorizontal:80,
    paddingVertical:20,
    borderRadius:45,
    backgroundColor: '#FFE88F'
  },
  // btnPressed: {
  //   backgroundColor: '#F3D048',
  // },

});
export default ConfigBtn;