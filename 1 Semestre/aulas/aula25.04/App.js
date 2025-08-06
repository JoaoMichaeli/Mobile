import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, List, TextInput } from 'react-native-paper';
import { SwipeListView } from 'react-native-swipe-list-view'

export default function App() {
  
  data = [{
    'key': '1',
    'name': 'Tarefa 1',
  }, {
    'key': '2',
    'name': 'Tarefa 2',
  }, {
    'key': '3',
    'name': 'Tarefa 3',
  }, {
    'key': '4',
    'name': 'Tarefa 4',
  }, {
    'key': '5',
    'name': 'Tarefa 5',
  }, {
    'key': '6',
    'name': 'Tarefa 6',
  }, {
    'key': '7',
    'name': 'Tarefa 7',
  }, {
    'key': '8',
    'name': 'Tarefa 8',
  }];

  const renderItem = ({item}) => {
    return (
      <List.Item
        key={item.key}
        title={item.name}
        style={styles.listItems}
        titleStyle={styles.title}
      />
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    <View style={styles.hiddenContainer}>
      <Button onPress={() => {}}>Deletar?</Button>
    </View>
  }

  return (
    <View style={styles.container}>

      <Text>Listas a fazer</Text>
      <SwipeListView data={data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={100}

      ></SwipeListView>

      <View>
        <TextInput
          label="Tarefas"
          mode="outlined"
          placeholder="Entre com uma tarefa"
          style={{width: 300, marginBottom: 10}}
        />
        <Button>Salvar</Button>
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
  listItems: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 25,
    fontSize: 24,
    fontWeight: 'bold'
  }
});
