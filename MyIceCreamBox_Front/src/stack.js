import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectIcecreamPage from './sendpage/screens/SelectIcecream'
import WriteLetterPage from './sendpage/screens/WriteLetterScreen'
import ConfigLetterScreenPage from './sendpage/screens/ConfigLetterScreen'
import FinshSendPage from './sendpage/screens/FinshSendScreen'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="SelectIcecreamPage">
      {/*SelectIcecreamPage : 1 of sendpage */}
      <Stack.Screen
        name="SelectIcecreamPage"
        component={SelectIcecreamPage}
        options={{ headerShown: false }} 
      />
      {/* WriteLetterPage : 2 of sendpage */}
      <Stack.Screen
        name="WriteLetterPage"
        component={WriteLetterPage}
        options={{ headerShown: false }} 
      />
      {/* ConfigLetterScreenPage: 3 of sendpage */}
      <Stack.Screen
        name="ConfigLetterScreenPage"
        component={ConfigLetterScreenPage}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="FinshSendPage"
        component={FinshSendPage}
        options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
};

export default StackNavigation;

