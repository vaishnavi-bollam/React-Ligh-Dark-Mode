// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isClicked: true}

  lightButton = () => {
    this.setState({isClicked: false})
  }

  nightButton = () => {
    this.setState({isClicked: true})
  }

  buttonClicked = () => {
    const {isClicked} = this.state
    if (isClicked === true) {
      return (
        <div className="card">
          <h1>Click To Change Mode</h1>
          <button onClick={this.lightButton}>Light Mode</button>
        </div>
      )
    }
    return (
      <div className="card1">
        <h1>Click To Change Mode</h1>
        <button onClick={this.nightButton}>Dark Mode</button>
      </div>
    )
  }

  render() {
    return <div className="main-bg">{this.buttonClicked()}</div>
  }
}

export default LightDarkMode
