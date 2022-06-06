import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Button3() {
  return (
    <TouchableOpacity
      onPress={() => alert('Hello, world!')}
      style={ styles.button }>
      <Text style={ styles.buttontext }>บันทึก</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#058AFA',
    elevation: 3,
    backgroundColor: '#058AFA',
    width: '100%',
  },
  buttontext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
});
