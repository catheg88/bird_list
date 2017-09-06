import { connect } from 'react-redux'
import SearchBar from './SearchBar'

const mapDispatchToProps = dispatch => ({
  handleTextChange: filterText => dispatch({
    type: 'TEXT_CHANGE',
    text: filterText
  })
})

const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
