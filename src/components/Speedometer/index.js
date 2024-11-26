import {Component} from 'react'
import './index.css'

class SpeedoMeter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count:
        prevState.count + 10 <= 200 ? prevState.count + 10 : prevState.count,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 10 >= 0 ? prevState.count - 10 : prevState.count,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="btn1" type="button" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="btn2" type="button" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default SpeedoMeter
