import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="Increase" onPress={increase} />

      <Text style={styles.text}>Counter: {counter}</Text>

      <Button style={styles.button} title="Decrease" onPress={decrease} />
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  button: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
  },

});
