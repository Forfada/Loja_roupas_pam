import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';

export default Que = ({ navigation }) => {
  return (
    <ScrollView style={estilo.sv}>
      <View>
        <Text style={estilo.tiu}>Sobre nós</Text>
        <View style={estilo.pad}>
          <Image
            style={estilo.imgw2}
            source={require('./img/fag.webp')}></Image>
        </View>
        <Text style={estilo.ca6}>
          Somos mais do que uma marca, somos uma paixão que une corações, mentes
          e histórias. Somos o Corinthians, uma legião de fiéis que respira
          futebol, orgulho e tradição.
        </Text>
        <Text style={estilo.ca5}>© 2024 Política de privacidade</Text>
        <Text style={estilo.ca5}> </Text>
      </View>
    </ScrollView>
  );
};
