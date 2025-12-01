import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import GettingStarted from './src/screens/GettingStarted';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Components" component={ComponentsScreen} />
    <Stack.Screen name="GettingStarted" component={GettingStarted} />
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="Image" component={ImageScreen} />
    <Stack.Screen name="Counter" component={CounterScreen} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

