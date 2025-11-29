import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
const ListScreen = () => {
  const friends = [
    {id: '1', name: 'Friend 1', age: 20 },
    {id: '2', name: 'Friend 2', age: 45 },
    {id: '3', name: 'Friend 3', age: 32 },
    {id: '4', name: 'Friend 4', age: 27 },
    {id: '5', name: 'Friend 5', age: 53 },
    {id: '6', name: 'Friend 6', age: 30 },
  ];
  return (
      <FlatList
      keyExtractor={item => item.id}
      data={friends}
      renderItem={({ item }) => (
        <Text style={styles.text}>
          {item.name} - Age {item.age}
        </Text>
      )}
    ></FlatList>
  );
};
const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    marginHorizontal: 50,
    fontSize: 20,
  },
});
export default ListScreen;
