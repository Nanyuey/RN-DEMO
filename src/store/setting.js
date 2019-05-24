import { observable, action } from 'mobx'
class theme {
  @observable color = 'yellow'

  @action.bound
  setColor(color) {
    this.color = color
  }
}
export default theme
