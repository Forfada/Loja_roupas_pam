import { Text, SafeAreaView, View, StyleSheet, ScrollView, Pressable, Image } from 'react-native';

export default Cont=({navigation})=>{
  return(
    <ScrollView style={estilo.sv}>
    <Pressable
          onPress={() => {
            navigation.navigate('Home');}}>
          <Image style={estilo.btvol} source={require('./img/volt.png')}></Image>
        </Pressable>

    <View>
          <Text style={estilo.tiu}>Localização</Text>
          <Text style={estilo.tiu}></Text>
          <Text style={estilo.ca5}>23 Sta. Barbara Bobolandia São Paulo </Text>
          <Text style={estilo.ca5}>IL 06123-7723</Text>
          <Text style={estilo.tiu}></Text>
          <Text style={estilo.tiu}>Siga-nos</Text>
          <View style={estilo.fle1}>
            <Image style={estilo.ico} source={require('./img/was.png')}></Image>
            <Image style={estilo.ico} source={require('./img/face.png')}></Image>
            <Image style={estilo.ico} source={require('./img/ins.png')}></Image>
            <Image style={estilo.ico} source={require('./img/ema.png')}></Image>
          </View>
          <Text style={estilo.tiu}></Text>
          <Text style={estilo.ca5}>© 2024 Política de privacidade</Text>
    </View>

    </ScrollView>
  )
}

/*<Pressable
          onPress={() => {
            navigation.href=('https://www.instagram.com/fagneroficial23/');}}>
          <Image style={estilo.btvol} source={require('./img/volt.png')}></Image>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');}}>
          <Image style={estilo.btvol} source={require('./img/volt.png')}></Image>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Home');}}>
          <Image style={estilo.btvol} source={require('./img/volt.png')}></Image>
        </Pressable>*/