import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text2}>Image Score - {score}</Text>
    </View>
  );
};

export default ImageDetail


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 10,
  },
  text2: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
    margin: 5,
    marginLeft: 10,
  },

  image: {
    height: 200,
    width: 200,
    margin: 5,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});