import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
