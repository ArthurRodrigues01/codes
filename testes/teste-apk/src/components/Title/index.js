import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default props =>
<View style={styles.header}>
    <Text style={styles.title}>{props.text}</Text>
</View>

const styles = StyleSheet.create({
    header: {
      marginTop: 90,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontWeight: 'bold',
      fontSize: 60,
      color: '#fff',
    }
})