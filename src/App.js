import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      Alert.alert("Error al registrar", error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Inicio de sesión exitoso", `Bienvenido, ${email}`);
    } catch (error) {
      Alert.alert("Error al iniciar sesión", error.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Mensaje tipo tarjeta pequeña arriba */}
      {showSuccessMessage && (
        <View style={styles.toastCard}>
          <Text style={styles.toastText}>Cuenta creada exitosamente</Text>
        </View>
      )}

      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Barra superior */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.topBarButton} onPress={handleLogin}>
            <Text style={styles.topBarButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.topBarButton, styles.registerButton]}
            onPress={handleRegister}
          >
            <Text style={[styles.topBarButtonText, styles.registerButtonText]}>
              Registrarse
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderSmallText}>El lugar para encontrar el trabajo de tus sueños</Text>
          <Text style={styles.subHeaderBigText}>¡Lleva tu carrera profesional a otro nivel con WjB!</Text>
        </View>



        {/* Tarjeta de login */}
        <View style={styles.card}>
          {/* Barra lateral */}
          <View style={styles.sidebar}>
            <View style={styles.sidebarButton} />
            <View style={styles.sidebarCircle} />
            <View style={styles.sidebarLine} />
            <View style={styles.sidebarTriangle} />
          </View>

          {/* Formulario */}
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="user"
                size={20}
                color="#c0c8a4"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#c0c8a4"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputContainer}>
              <FontAwesome5
                name="lock"
                size={20}
                color="#c0c8a4"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#c0c8a4"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.registerTextContainer}
              onPress={() => Alert.alert("Registrar")}
            >
              <Text style={styles.registerText}>
                ¿No tienes una cuenta?{" "}
                <Text style={styles.registerLink}>Registrate</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton} onPress={handleRegister}>
              <Text style={styles.createButtonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f0dd",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  topBar: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 2050,
    justifyContent: "flex-end",
    paddingVertical: 12,
    backgroundColor: "#2e3710",
    borderRadius: 12,
    marginBottom: 20,
  },
  topBarButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    justifyContent: "center",
    borderRadius: 8,
  },
  topBarButtonText: {
    color: "#c0c8a4",
    fontWeight: "700",
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: "#8ca347",
    marginLeft: 12,
  },
  registerButtonText: {
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f8e4",
    borderRadius: 12,
    width: "100%",
    maxWidth: 450,
    paddingVertical: 100,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 40, // aquí agregas este margen para bajarla
  },

  sidebar: {
    backgroundColor: "#6b7d32",
    width: 60,
    height: 220,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  sidebarButton: {
    width: 40,
    height: 8,
    backgroundColor: "#8ca347",
    borderRadius: 6,
  },
  sidebarCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#c3d278",
  },
  sidebarLine: {
    width: 35,
    height: 5,
    backgroundColor: "#c3d278",
    borderRadius: 6,
  },
  sidebarTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 18,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#c3d278",
    marginTop: 6,
  },
  form: {
    flex: 1,
    marginLeft: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4a5336",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 48,
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: "#c0c8a4",
    fontWeight: "600",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#1f2907",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  loginButtonText: {
    color: "#c0c8a4",
    fontWeight: "700",
    fontSize: 18,
  },
  registerTextContainer: {
    marginTop: 12,
    alignItems: "center",
  },
  registerText: {
    color: "#3b421e",
    fontStyle: "italic",
  },
  registerLink: {
    textDecorationLine: "underline",
    fontWeight: "600",
  },
  createButton: {
    marginTop: 20,
    backgroundColor: "#2e3710",
    borderRadius: 8,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  createButtonText: {
    color: "#d0d8a7",
    fontWeight: "600",
    fontSize: 16,
  },
  toastCard: {
    position: "absolute",
    top: 90,
    alignSelf: "center",
    backgroundColor: "#8ca347",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    zIndex: 9999,
    minWidth: 280,
    maxWidth: "90%",
  },
  toastText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "center",
  },
  subHeader: {
    width: "100%",
    maxWidth: 2000,
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  subHeaderSmallText: {
    color: "#6b7d32",
    fontSize: 24,
    marginBottom: 4,
  },
  subHeaderBigText: {
    color: "#2e3710",
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 28,
  },

});



export default Login;
