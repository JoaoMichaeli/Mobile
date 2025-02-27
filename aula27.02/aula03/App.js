import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image} from 'react-native'; // importação da img
 
export default function App() {
  return (
    <View>
      <View>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
        <Button title='Clique aqui' onPress={() => {}}/>
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
 
 