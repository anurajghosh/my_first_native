import { View } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  )
}

export default ImageScreen

