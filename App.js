import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home';
import Links from './components/LinksStacks';
import Cont from './components/conta';
import Que from './components/quem';

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer style={estilo.des}>
    
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{drawerStyle: {backgroundColor:'#ded9d9', width: '60%', tintColor:'white'},
        }}>

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Camisas Disponiveis" component={Links} />
        <Drawer.Screen name="Quem somos" component={Que}/>
        <Drawer.Screen name="Contato" component={Cont}/>
        
      </Drawer.Navigator>
      
    </NavigationContainer>
    
  );
}