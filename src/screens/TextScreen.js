import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TextScreen = () => {
    const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.text}
        placeholder="Enter text here"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={styles.showText}>
        My name is: {name}
      </Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  text: {
    marginVertical: 40,
    marginHorizontal: 60,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    },
    showText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 20,
    },
});
