// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './android/app/src/Component/HomeScreen';
import Splashscreen2 from './android/app/src/Component/Splashscreen2';
import SplashScreen1 from './android/app/src/Component/SplashScreen1';
import Splashscreen4 from './android/app/src/Component/Splashscreen4';
import Splashscreen3 from './android/app/src/Component/Splashscreen3';
import Splashscreen5 from './android/app/src/Component/Splashscreen5';
import Splashscreen6 from './android/app/src/Component/Splashscreen6';
import MapPage from './android/app/src/Component/Homepage/MapPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={SplashScreen1} />
        <Stack.Screen name="Screen" component={Splashscreen2} />
        <Stack.Screen name="Screen2" component={Splashscreen3} />
        <Stack.Screen name="Screen3" component={Splashscreen4} />
        <Stack.Screen name="Screen4" component={Splashscreen5} />
        <Stack.Screen name="Screen5" component={Splashscreen6} />
        <Stack.Screen name="suji" component={MapPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


