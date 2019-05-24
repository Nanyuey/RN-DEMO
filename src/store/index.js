import { observable, computed, action } from 'mobx'
// class Todo {
//   id = Math.random();
//   @observable title = "";
//   @observable finished = false;
// }
// class Todo {
//   id = Math.random()
//   @observable title = ''
//   @observable finished = false
// }
class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }
  @action.bound
  add(title) {
    const Todo = { id: Math.random(), title, finished: false, isFocus: false }
    this.todos.push(Todo)
  }
}
export default TodoList
