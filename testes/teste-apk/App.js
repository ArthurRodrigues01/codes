
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';

export default function App() {
  return (
    <View style={styles.body}>
        
      <Title style={styles.title} text="Calcular:"/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: 'rgb(21,108,207)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  }
});