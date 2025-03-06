import { Button, StyleSheet, Text, View, Image} from 'react-native'; // importação da img
 
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Button title='Home' onPress={() => {}}/>
        <Button title='Notícias' onPress={() => {}}/>
        <Button title='Perfil' onPress={() => {}}/>
      </View>
      <View>
        <View>
          <Text>Ja sonhou com esse homem ?</Text>
          <Image source={require('./assets/sapo.png')} />
          <Text>Texto 1</Text>
        </View>
        <View>
          <Text>Texto 1</Text>
          <Image source={require('./assets/sapo.png')} />
          <Text>Texto 1</Text>
          <Text>Texto 1</Text>
          <Image source={require('./assets/sapo.png')} />
          <Text>Texto 1</Text>
        </View>
      </View>
      <View>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
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
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'blue'
  }
});
 