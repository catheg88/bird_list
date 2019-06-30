import React from 'react'
import { connect } from 'react-redux'
import Actions from '../Actions'

class SearchBar extends React.Component {

  render() {
    return (
      <div id="searchBar">
        <input
          type="text"
          onChange={this.props.handleTextChange}
          placeholder="Search by bird name"
          ></input>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleTextChange: e => {
    console.log(e.target.value)
    dispatch(Actions.textChange(e.target.value))
  }
})

SearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBar
