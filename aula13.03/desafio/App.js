import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

function WelcomePage(){
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
}

const handleNameChange = (text) => {
  setName(text);
};

const handleSubmit = () => {
  if (isSubmitted){
    setName('');
    setIsSubmitted(false);
  }else {
    setIsSubmitted(true);
  }
};

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