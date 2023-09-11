import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import PostosCarregamento from './screens/PostosCarregamento';
import PostosLocal from './screens/PostosLocal';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PostosCarregamento" component={PostosCarregamento} />
        <Stack.Screen name="PostosLocal" component={PostosLocal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

