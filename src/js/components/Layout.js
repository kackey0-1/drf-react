import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {title: 'Welcome'}
  }
  handleChange(e) {
    const title = e.target.value;
    console.log(title)
    this.setState({title: title})
  }
  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <h1>{this.state.title}</h1>
        <input value={this.state.title} onChange={this.handleChange.bind(this)} />

        <h1>Variant name: {this.name}</h1>
        <h1>Addtional calc: {1 + 4}</h1>
        <h1>Arrow Func: {((num) => { return 100 * num })}</h1>

        <Footer />
      </div>
    )
  }
}
