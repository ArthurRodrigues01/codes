import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Result from '../Result/'

const styles = StyleSheet.create({
    label: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 25,
    },
    input: {
        marginHorizontal: 10,
        marginBottom: 25,
        height: 50,
        // width: '100%',
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        color: 'rgb(0,0,0)',
        borderRadius: 10,
        padding: 10,
    },
    button: {
        width: '95%',
        borderRadius: 50,
        height: 60,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        // marginHorizontal: 10,
        backgroundColor: '#215d96',
        borderColor: '#fff',
        borderWidth: 1, 
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
    }
});

export default () => { 
    const [num1, setNum1] = useState(null)
    const [num2, setNum2] = useState(null)
    const [messageResult, setMessageResult] = useState("Digite os números")
    const [result, setResult] = useState(null)
    const [TextButton, setTextButton] = useState("Calcular")
    
    function calculator() {
        return setResult(parseInt(num1)**parseInt(num2))
    }

    function validationResult() {
        if(num1 != null && num2 != null) {
            calculator()
            setNum1(null)
            setNum2(null)
            setMessageResult(`Resultado: `)
            setTextButton("Calcular novamente")
            return
        }
        setResult(null)
        setNum1(null)
        setNum2(null)
        setTextButton("Calcular")
        setMessageResult("Digite os números")
    }

    return(
        <View>
            <View >
                <Text style={styles.label}>Número 1:</Text>
                <TextInput style={styles.input}  
                onChangeText={setNum1}
                value={num1}
                placeholder="digite um número" 
                keyboardType="numeric"/>
                <Text style={styles.label}>Número 2:</Text>
                <TextInput style={styles.input} 
                onChangeText={setNum2}
                value={num2}
                placeholder="digite um número" 
                keyboardType="numeric"/> 
                
                <TouchableOpacity
                style={styles.button}
                onPress={() =>{
                    validationResult()
                }}
                >
                    <Text style={styles.textButton}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            <Result result={messageResult} result2={result}></Result>
        </View>
    )
}