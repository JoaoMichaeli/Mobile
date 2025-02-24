import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        alignSelf: 'stretch', // ocupe todo o espaço
        flex: 5, // seja 50% da tela
        backgroundColor: '#f00', // mudando a cor
        alignItems: 'center', // alinhando os itens
        justifyContent: 'center' // centralizando os itens
    }}> 
        <Text>Bom dia!</Text>
        </View>
      <View style={{
        flex: 5,
        alignSelf: 'stretch',
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Text>Turma Fiap!</Text>
        </View>
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
