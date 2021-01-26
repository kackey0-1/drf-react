import React from 'react'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {title: 'Welcome'}
  }
  handleChange(e) {
    const title = e.target.value;
    this.state.title = title
  }
  render() {
    return (
      <header>
        <h1>{this.state.title}</h1>
        <input value={this.props.title} onChange={this.handleChange.bind(this)} />
      </header>
    )
  }
}