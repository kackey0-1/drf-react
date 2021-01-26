import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.name = "Yamada Taro"
  }
  render() {
    return (
      <div>
        <Header />

        <h1>Welcome!</h1>
        <h1>Variant name: {this.name}</h1>
        <h1>Addtional calc: {1 + 4}</h1>
        <h1>Function: {this.getResult(8)}</h1>
        <h1>Arrow Func: {((num) => { return 100 * num })}</h1>

        <Footer />
      </div>
    )
  }
  getResult(num) {
    return 100 * num
  }
}
