import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Page404">
      <Stack.Screen
        name="Page404"
        component={}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
  );
};
export default StackNavigation;