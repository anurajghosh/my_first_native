import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
          <Text style={styles.text}>This is the Components Screen</Text>
          <Text>Hi there</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        margin: 30,
  },
});

export default ComponentsScreen;