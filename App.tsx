import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/views/HomeScreen';
import MovieDetails from './src/views/MovieDetails';
import themes from './src/themes/themes';
import AppBar from './src/components/AppBar';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={themes}>
      <Stack.Navigator
        screenOptions={{
          header: AppBar,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
