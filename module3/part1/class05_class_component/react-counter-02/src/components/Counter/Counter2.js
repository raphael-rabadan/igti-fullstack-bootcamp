import React, { Component } from "react"
import css from "./counter.module.css"
import DecrementButton from "./DecrementButton"
import IncrementButton from "./IncrementButton"
import Steps from "./Steps"
import Value from "./Value"

export default class Counter2 extends Component {
  handleButtonClick = (clickType) => {
    this.props.onCount(clickType)
  }
  render() {
    const { countValue, currentStep } = this.props
    return (
      <div className={css.counterContainer}>
        <DecrementButton onDecrement={this.handleButtonClick}></DecrementButton>
        <Value value={countValue}></Value>
        <IncrementButton onIncrement={this.handleButtonClick}></IncrementButton>
        <Steps current={currentStep}></Steps>
      </div>
    )
  }
}
