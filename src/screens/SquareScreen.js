import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case 'blue':
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      case 'green':
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          margin: 10,
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  box: color => ({
    height: 100,
    width: 100,
    backgroundColor: color,
    marginVertical: 5,
  }),
});
