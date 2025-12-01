import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image style={styles.image} source={imageSource} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default ImageDetail


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    margin: 30,
  },
  image: {
    height: 200,
    width: 200,
    margin: 5,
  },
});