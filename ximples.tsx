import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}>
        Digite seu gmail:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="GMAIL"
      />

      <Text style={styles.texto}>
        Digite sua senha:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="SENHA"
      />

      <View style={styles.botao}>
        <Button 
          title="Salvar" 
          color="#FF2900"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 45,
  },

  texto: {
    fontSize: 23,
    color: "#9AC0CD",
    textAlign: "center",
    marginBottom: 14,
  },

  input: {
    backgroundColor: "#9FB6CD",
    width: "100%",
    padding: 11,
    borderRadius: 20,
    marginBottom: 23,
    textAlign: "center",
  },

  botao: {
    width: "50%",
  }
});
