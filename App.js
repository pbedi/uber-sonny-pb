import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import EatsScreen from './screens/EatsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
              options={{ headerShown: false, }} />
            <Stack.Screen name="MapScreenM" component={MapScreen}
              options={{ headerShown: true, }} />
            <Stack.Screen name='EatsScreen' component={EatsScreen}
              options={{ headerShown: true, }} />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * 1) yarn add @reduxjs/toolkit
 * 2) yarn add react-redux
 * 3) yarn add tailwind-react-native-classnames
 * 4) yarn add react-native-elements
 * 5) yarn add react-native-vector-iconsæ
 * 6) yarn add react-native-safe-area-context
 * 7) yarn add @react-navigation/native
 * 8) npx expo install react-native-screens react-native-safe-area-context
 * 9) yarn add @react-navigation/native-stack
 * 10) yarn add react-native-google-places-autocomplete
 * 11) Google map key: AIzaSyAvrVDzfee-kfatRWGwTlbOqRvOx2BvGXQ
 * 12) yarn add react-native-dotenv
 * 13) yarn add react-native-maps
 * Time: 5:20
 */