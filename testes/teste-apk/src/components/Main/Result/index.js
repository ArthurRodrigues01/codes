import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    result: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default props => 
<View>
    <Text style={styles.result}>{props.result}</Text>
    <Text style={styles.result}>{props.result2}</Text>
</View>