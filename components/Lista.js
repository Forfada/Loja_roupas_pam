import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';

import Descricao from './Descricao';
import estilo from './css/estilos';
import Links from './LinksStacks';
import dados from './dados';

export default LC = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={estilo.sv}>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image
            style={estilo.btvol}
            source={require('./img/volt.png')}></Image>
        </Pressable>

        <Text style={estilo.tit}></Text>
        <FlatList
          data={dados}
          renderItem={({ item }) => (
            <View style={estilo.listItem}>
              <Image source={item.img} style={estilo.imgItem} />
              <Text style={estilo.ca}>{item.title}</Text>
              <Text style={estilo.ca1}>{item.desc1}</Text>

              <View style={estilo.foot}>
                <Text style={estilo.foott}>{item.prec}</Text>
                <Pressable
                  style={estilo.bt}
                  onPress={() => {
                    navigation.navigate('Camisas Disponiveis', {
                      screen: 'Desc',
                      params: {
                        id: item.id,
                      },
                    });
                  }}>
                  <Image
                    source={require('./img/icon.png')}
                    style={estilo.bt1}></Image>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};
