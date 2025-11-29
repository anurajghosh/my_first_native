import { View, Text, Button, StyleSheet } from 'react-native';

export default function GettingStarted({ navigation }) {
    const name = 'Anuraj Ghosh';
  return (
    <View>
      <Text style={styles.text}>Getting started with react native!</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
        fontSize: 45,
        color: 'red',
        fontWeight: 'bold',
        margin: 30,
    },
    text2: {
        fontSize: 20,
        color: 'blue',
        margin: 30,
    },
});