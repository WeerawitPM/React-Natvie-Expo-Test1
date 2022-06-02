import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import InputText1 from './components/InputText1';
import InputText2 from './components/InputText2';

export default function App() {

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <View style={ styles.lefttext1 }>
        <Text style={ styles.text }>สร้างการประชุม</Text>
        <Text style={ styles.text2 }>ชื่อการประชุม</Text>
      </View>
      <InputText1/>
      <View style={ styles.lefttext2 }><Text style={ styles.text2 }>รายละเอียดการประชุม</Text></View>
      <InputText2/>
      <View style={ styles.lefttext3 }><Text style={ styles.text2 }>ไฟล์แนบ</Text></View>
      <Button1/>
      <View style={ styles.lefttext4 }><Text style={ styles.text }>แท็ก</Text></View>
      <Button2/>
      <Button3/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lefttext1: {
    paddingRight: 200,
  },
  lefttext2: {
    paddingRight: 150,
  },
  lefttext3: {
    paddingRight: 250,
  },
  lefttext4: {
    paddingRight: 280,
  },
  text: {
    color: '#058AFA',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
  },

});
