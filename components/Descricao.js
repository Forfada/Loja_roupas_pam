
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import dados from './dados';

export default Desc = ({ route, navigation }) => {
  // estou colocando u parametro da tela fruto em variavel
  const camisa = route.params.id;// 001

                   
  // filtro
  const dadoscamisa = dados.find( (element) => element.id == camisa );

  return (
    
    <ScrollView style={estilo.sv}>
    <View style={estilo.des}>
    <Image style={estilo.img} source={dadoscamisa.img2}  />
      <View style={estilo.des}>
      
      <Text style={estilo.ca}>{dadoscamisa.id}</Text>
      <Text style={estilo.ca1}>{dadoscamisa.desc}</Text>
      
      </View>
      <Pressable
       onPress={()=>{
         navigation.goBack()
       }}>
        <Text style={estilo.btv}>voltar</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};