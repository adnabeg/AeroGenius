import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ReviewScreen from './src/screens/ReviewScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Quiz" 
            component={QuizScreen} 
            options={{ title: 'Quiz', headerShown: true, headerStyle: { backgroundColor: '#1a1a2e' }, headerTintColor: '#fff'} }
          />
          <Stack.Screen 
            name="Review" 
            component={ReviewScreen} 
            options={{ 
              title: 'Review', 
              headerLeft: null, 
              headerTitleAlign: 'center', 
              headerStyle: { backgroundColor: '#1a1a2e' }, 
              headerTintColor: '#fff'
            }} 
          />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
