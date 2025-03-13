import { StatusBar } from 'expo-status-bar';
import { Button, Text, TextInput, View } from 'react-native';

export default function App() {
  nomeCadastro = ''
  onPressed = (data) => {

  }
  mudaTexto = (data) => {
    nomeCadastro = data;
    console.log(nomeCadastro)
  }
  return (
    <View>
      <Text>TXT</Text>
      <TextInput value='' onChangeText={mudaTexto(data)}/>
      <Button  title='Cadastrar' onPress={onPressed}></Button>
    </View>
  );
}
