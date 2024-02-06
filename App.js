import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [petals, setPetals] = useState(randomPetals()); // Páratlan számú szirmok, 1 és 9 között
  const [message, setMessage] = useState('Does she/he love you?');

  function randomPetals() {
    // Véletlenszerűen 1, 3, 5, 7 vagy 9 szirmot generál
    const options = [1, 3, 5, 7, 9];
    return options[Math.floor(Math.random() * options.length)];
  }

  const removePetal = () => {
    if (petals > 1) {
      setPetals(petals - 1);
      setMessage(petals % 2 !== 0 ? "She/he doesn't love you!" : "She/he loves you!");
    } else {
      // Az utolsó szirom eltávolításakor kiírja a "She/he loves you!" üzenetet és megállítja a játékot
      setPetals(petals - 1);
      setMessage("She/he loves you!");
      Alert.alert('Game Over', 'She/he loves you!', [
        { text: 'OK', onPress: () => setPetals(0) },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.petals}>{'🌸'.repeat(petals)}</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={removePetal} disabled={petals === 0}>
        <Text style={styles.buttonText}>{petals > 0 ? '-1' : ''}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  petals: {
    fontSize: 30,
    marginBottom: 20,
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;
