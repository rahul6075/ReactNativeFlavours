import { View, Text } from 'react-native'
import React from 'react'
import Config from "react-native-config";

const App = () => {
  return (
    <View>
      <Text>App Running : {Config.ENV}</Text>
    </View>
  )
}

export default App