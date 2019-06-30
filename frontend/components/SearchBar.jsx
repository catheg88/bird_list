import React from 'react'
import { connect } from 'react-redux'
import Actions from '../Actions'

class SearchBar extends React.Component {

  handleTextChange(e){
    console.log(e.target.value)
  }

  render() {
    return (
      <div id="searchBar">
        <input
          type="text"
          onChange={() => this.handleTextChange.bind(this)}
          placeholder="Search by bird name"
          ></input>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  handleTextChange: filterText => dispatch(Actions.textChange(filterText))
})

SearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBar
