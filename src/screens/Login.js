// src/screens/Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Manejo del registro de usuario
  const handleRegister = async () => {
    console.log('[Register] Usuario:', email, password);

    try {
      // Registro en Firebase Auth
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('[Auth] Usuario registrado:', user.uid);

      // Guardar el documento en Firestore
      const userRef = doc(db, 'users', user.uid); // Usamos el uid como ID
      await setDoc(userRef, {
        email: email,
        createdAt: serverTimestamp(),
      });

      console.log('[Firestore] Datos guardados en Firestore:', userRef.path);
      Alert.alert('Registro exitoso', `Usuario registrado: ${email}`);
    } catch (error) {
      console.error('[Error Registro]', error);
      Alert.alert('Error al registrar', error.message);
    }
  };

  // Manejo del inicio de sesión
  const handleLogin = async () => {
    console.log('[Login] Intentando iniciar sesión:', email, password);

    try {
      // Inicio de sesión en Firebase Auth
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log('[Auth] Sesión iniciada:', user.uid);

      // Actualizar la fecha de último inicio de sesión en Firestore
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });

      console.log('[Firestore] Last login actualizado:', userRef.path);
      Alert.alert('Bienvenido', `Usuario: ${user.email}`);
    } catch (error) {
      console.error('[Error Login]', error);
      Alert.alert('Error al iniciar sesión', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi App</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
      <View style={{ height: 12 }} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc',
    marginBottom: 12, padding: 10, borderRadius: 5
  },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' }
});
