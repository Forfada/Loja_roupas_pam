import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Button,
  Image,
  Pressable
} from 'react-native';
import Descricao from './Descricao';
import estilo from './css/estilos';
import Links from './LinksStacks';
import dados from './dados';

export default Home = ({ navigation }) => {
  return (
    <ScrollView style={estilo.sv}>
      <View>
        <Image source={require('./img/wal.jpg')} style={estilo.imgw}></Image>
        
        <Text style={estilo.tiu}>Material Esportivo</Text>
        <Text style={estilo.ca5}>Camisas esportivas do corinthians</Text>
        
        <View style={estilo.fle}>

        <Pressable
       onPress={()=>{
         navigation.navigate ('Camisas Disponiveis')
       }}>
        <Text style={estilo.bth}>Camisas</Text>
      </Pressable>

      <Pressable
       onPress={()=>{
         navigation.navigate ('Quem somos')
       }}>
        <Text style={estilo.bth}>Quem</Text>
      </Pressable>
      
      <Pressable
       onPress={()=>{
         navigation.navigate ('Contato')
       }}>
        <Text style={estilo.bth}>Contato</Text>
      </Pressable>
      </View>

      </View>
    </ScrollView>
  );
};
