import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload };
    case 'decrement':
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  const increase = () => {
    dispatch({ type: 'increment', payload: 1 });
  };

  const decrease = () => {
    dispatch({ type: 'decrement', payload: 1 });
  };

  return (
    <View style={styles.container}>
      <Button title="Increase" onPress={increase} />

      <Text style={styles.text}>Counter: {state.counter}</Text>

      <Button title="Decrease" onPress={decrease} />
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
});
