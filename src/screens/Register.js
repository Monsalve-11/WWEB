import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const Register = ({ navigation }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  const handleCrearCuenta = () => {
    // Aquí puedes llamar createUserWithEmailAndPassword u otro backend
    alert(`Cuenta creada para ${nombre} ${apellido}`);
    navigation.goBack(); // Regresa a login
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.card}>
        <View style={styles.sidebar}>
          <View style={styles.sidebarButton} />
          <View style={styles.sidebarCircle} />
          <View style={styles.sidebarLine} />
          <View style={styles.sidebarTriangle} />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            placeholderTextColor="#c0c8a4"
            value={nombre}
            onChangeText={setNombre}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            placeholderTextColor="#c0c8a4"
            value={apellido}
            onChangeText={setApellido}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de Nacimiento"
            placeholderTextColor="#c0c8a4"
            value={fechaNacimiento}
            onChangeText={setFechaNacimiento}
          />

          <TouchableOpacity
            style={styles.createButton}
            onPress={handleCrearCuenta}
          >
            <Text style={styles.createButtonText}>Crear cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: "#6b7d32", textAlign: "center" }}>
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f1f0dd",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    marginTop: 40,
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
  input: {
    backgroundColor: "#4a5336",
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
    height: 48,
    color: "#c0c8a4",
    fontWeight: "600",
    fontSize: 16,
  },
  createButton: {
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
});

export default Register;
