import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Components"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Components" 
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Screen" 
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter Screen" 
        onPress={() => navigation.navigate('Counter')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        margin: 30,
  },
});