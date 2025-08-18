import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/pages/WelcomeScreen';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Counter />
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
