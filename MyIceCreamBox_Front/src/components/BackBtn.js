import { View, Image, Pressable,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
const BackBtn = (props) => {    
    const backBtnTest = () => {
        console.log('아이스크림선택-뒤로가기버튼 선택');
    }
    return (
        <View>
            <Pressable
                onPress={() => backBtnTest()}>
                <Image source={require('../../assets/img/back.png')}  style={styles.image}/>
            </Pressable>
        </View>
    );
};
BackBtn.propTypes = {
    src: PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignContent:'center',
      justifyContent: 'center',
      width:'100%',
  
    },
    image:{
        width:30,
        height:30,
    }
});
export default BackBtn;