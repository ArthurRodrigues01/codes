// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text } from 'react-native';
import Header from './src/components/Header/';
import Footer from './src/components/Footer/';
import Main from './src/components/Main/';
import If from './src/components/If/';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTES = 'notes'


// import RNFS from 'react-native-fs';

// RNFS.DocumentDirectoryPath + '/test.txt'

export default function App() {
  const [ a, setA ] = useState('')

  useEffect(() => {
    console.log( 'componente montou')

    if (AsyncStorage.getItem(NOTES)) {
      const notes = JSON.parse(AsyncStorage.getItem(NOTES))
    }



    // caso não exista entradas
    AsyncStorage.setItem(NOTES, JSON.stringify({
       notes: [
        { id: 0, text: 'nota 1'}
      ]
    
    }))

    
    // adicionando entrada nova
    AsyncStorage.setItem(NOTES, JSON.stringify({
      notes: notes.concat({dwasiojdaso})   
    }))

    // removendo algo que ja existe
    const notes = [{id: 1}, {id: 2}]
    AsyncStorage.setItem(NOTES, JSON.stringify({
      notes: notes.filter(note => false) 
    }))

    // criando um novo id 
    const dateObj = new Date()
    const day = dateObj.getUTCDate()
    const month = dateObj.getUTCMonth()
    const year = dateObj.getUTCFullYear()
    const hours = dateObj.getUTCHours()
    const minutes = dateObj.getUTCMinutes()
    const seconds = dateObj.getUTCSeconds()
    const milliseconds = dateObj.getUTCMilliseconds()

    const dateID = `${day}-${month}-${year} ; ${hours}:${minutes}:${seconds}:${milliseconds}`

  useEffect(() => {
    console.log('mudou o A', a)
  }, [a])

  function teste(){
    
    console.log('teste')
    AsyncStorage.setItem('teste1', value).then(() => {
      setA('salvou')
    })
  
    console.log('teste2')
    AsyncStorage.setItem('teste2', value)
  
  }
  
  teste()


  return (
    <ScrollView style={styles.container}>
      <Header>Notas:</Header>
      <Main/>
      <If condition={2 ==  "2"}>
        <Text>Hello World!</Text>
      </If>
      <Footer>@ArtProductions</Footer>
      {/* <StatusBar style="auto" /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#ddd',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const storeData =  (value) => {
  AsyncStorage.setItem('@storage_Key', value)
}


