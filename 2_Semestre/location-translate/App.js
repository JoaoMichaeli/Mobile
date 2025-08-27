import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/pages/Counter';
import WelcomeScreen from './src/pages/WelcomeScreen';
import NotificationScreen from './src/pages/NotificationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NotificationScreen/>
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
