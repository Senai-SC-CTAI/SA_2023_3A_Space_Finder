import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import alunoHorarios from './screens/alunoHorarios';
import B from './screens/telaB';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="alunoHorarios" screenOptions={{
          headerShown: true}}>
      <Stack.Screen name="alunoHorarios" component={alunoHorarios} options={{ title: '2A' }} />
      <Stack.Screen name="B" component={B} options={{ title: 'B' }} />
    </Stack.Navigator>
    </NavigationContainer>
        
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
