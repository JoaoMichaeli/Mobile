// LoginScreen.js (exemplo simplificado de login)
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseAuth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

// Firestore exemplo - salvar dados após cadastro
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebaseAuth';

const salvarDadosUsuario = async (userId, dados) => {
  await setDoc(doc(db, 'usuarios', userId), dados);
};

