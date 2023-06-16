import { Text, View,StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Title = (props) => {
  
 
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};
Title.propTypes = {
    title: PropTypes.string,
};
const styles = StyleSheet.create({
  text: {
    fontSize:30,
    

  },

});
export default Title;