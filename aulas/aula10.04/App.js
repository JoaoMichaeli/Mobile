import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const key = '2TDSPK'
  const [valorInput, alterarValorInput] = useState('')
  const save = () => {
    saveData(key, valorInput);
  }

  const saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log('[Error][saveData]');
    }
  };

  const lerData = async (key) => {
    return AsyncStorage.getItem(key)
  }

  return (
    <View style={styles.container}>
      <TextInput value={valorInput} onChange={alterarValorInput}></TextInput>
      <Button title='Salvar' onPress={save}></Button>
      <Button title='Ler' onPress={lerData}></Button>
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
});
