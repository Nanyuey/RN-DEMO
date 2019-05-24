import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { TabNavigator } from '../router/index'
class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title')
    }
  }
  render() {
    const text = this.props.navigation.getParam('text')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>{text}</Text>
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ title: '我改拉' })}
        />
      </View>
    )
  }
}
export default DetailsScreen
