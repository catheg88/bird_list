import React from 'react'

class SearchBar extends React.Component {

  helperHandleTextChange(e) {
    this.props.handleTextChange(e.target.value)
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.helperHandleTextChange.bind(this)}></input>
      </div>
    )
  }
}

export default SearchBar
