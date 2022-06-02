import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={ styles.container }>
      <StatusBar style="auto" />
      <Text style={ styles.text }>สร้างการประชุม</Text>
      <Text style={ styles.text2 }>ชื่อการประชุม</Text>
      <Text style={ styles.text2 }>รายละเอียดการประชุม</Text>
      <Text style={ styles.text2 }>ไฟล์แนบ</Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={ styles.button1 }>
        <Text style={ styles.buttontext }>เพิ่มไฟล์</Text>
      </TouchableOpacity>
      <Text style={ styles.text2 }>แท็ก</Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={ styles.button1 }>
        <Text style={ styles.buttontext }>เพิ่มแท็ก</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={ styles.button2 }>
        <Text style={ styles.buttontext2 }>บันทึก</Text>
      </TouchableOpacity>
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
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: 'white',
    width: '90%',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: '#058AFA',
    width: '90%',
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#058AFA'
  },
  buttontext2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
});
