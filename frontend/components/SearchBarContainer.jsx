import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Actions from '../Actions'

const mapDispatchToProps = dispatch => ({
  handleTextChange: filterText => dispatch(Actions.textChange(filterText))
})

const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)

export default SearchBarContainer
