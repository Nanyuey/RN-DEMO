import React, { Component } from 'react'
import { Button, Text, View, Switch, TextInput, StyleSheet } from 'react-native'
import { observer, Provider, inject } from 'mobx-react'
import TodoList from '../store/index'
import theme from '../store/setting'
@inject('theme')
@observer
class TodoListView extends Component {
  render() {
    const { todoList, theme } = this.props
    return (
      <View style={theme.container}>
        {todoList.todos.map(todo => (
          <TodoView todo={todo} key={todo.id} />
        ))}
        <Text> Tasks left: {todoList.unfinishedTodoCount}</Text>
        <Button title="Add Todo" onPress={() => todoList.add('lalalla')} />
        <Button title="change Color" onPress={() => theme.setColor('green')} />
      </View>
    )
  }
}
const TodoView = observer(({ todo }) => (
  <View>
    <Switch
      value={todo.finished}
      onValueChange={() => (todo.finished = !todo.finished)}
    />
    <TodoTitle style={{ height: 50 }} todo={todo} />
  </View>
))
const TodoTitle = observer(({ todo }) => {
  if (todo.isFocus) {
    return (
      <TextInput
        value={todo.title}
        onChangeText={text => (todo.title = text)}
      />
    )
  }
  return <Text onPress={() => (todo.isFocus = true)}>{todo.title}</Text>
})
export default class HelloWorldApp extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const store = new TodoList()
    const styles = new theme()
    return (
      <Provider theme={styles}>
        <View style={{ display: 'flex' }}>
          <Text>Hello, world!</Text>
          <Button
            title="Go to Details"
            onPress={() =>
              this.props.navigation.navigate('Detail', {
                text: '我是参数',
                title: '我是标题啊'
              })
            }
          />
          <TodoListView todoList={store} />
        </View>
      </Provider>
    )
  }
}
