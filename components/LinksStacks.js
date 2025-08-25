import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LCs from './Lista';
import Desc from './Descricao';

const Stack = createNativeStackNavigator();

export default function Links() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Camisas" component={LC}  options={{headerShown: false}}/>
      <Stack.Screen name="Desc" component={Desc}  options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
