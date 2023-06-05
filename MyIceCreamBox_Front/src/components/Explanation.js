import { Text, View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
const Explanation = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.nickname}{props.contents}</Text>
    </View>
  );
};
Explanation.propTypes = {
    nickname: PropTypes.string,
    contents: PropTypes.string,
};

const styles = StyleSheet.create({
  text: {
    fontSize:15,
    marginBottom:30,
  },

});
export default Explanation;