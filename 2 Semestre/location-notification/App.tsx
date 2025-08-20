import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { I18nextProvider } from 'react-i18next';

import WelcomeScreen from './src/pages/WelcomeScreen';
import i18n from './src/utils/i18n';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}  >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <WelcomeScreen />
      </View>
    </I18nextProvider>
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
