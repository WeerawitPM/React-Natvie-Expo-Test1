import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import Button1 from './components/Button1';
import Button2 from './components/Button2';
import Button3 from './components/Button3';
import InputText1 from './components/InputText1';
import InputText2 from './components/InputText2';
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_100Thin, Prompt_700Bold, } from '@expo-google-fonts/prompt';

export default function App() {

  let [fontsLoaded] = useFonts({
    Prompt_100Thin, Prompt_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Text style={ styles.text }>สร้างการประชุม</Text>
      <Text style={ styles.text2 }>ชื่อการประชุม</Text>
      <View style= { styles.center }><InputText1/></View>
      <Text style={ styles.text2 }>รายละเอียดการประชุม</Text>
      <View style= { styles.center }><InputText2/></View>
      <Text style={ styles.text2 }>ไฟล์แนบ</Text>
      <View style= { styles.center }><Button1/></View>
      <Text style={ styles.text2 }>แท็ก</Text>
      <View style= { styles.center }><Button2/></View>
      <View style= { styles.center }><Button3/></View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily: 'Prompt_700Bold',

  },
  text: {
    color: '#058AFA',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Prompt_700Bold',
  },
  text2: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Prompt_700Bold',
  },
  center: {
    width: '100%',
    paddingLeft: 18,
    paddingRight: 18,
  }
});
