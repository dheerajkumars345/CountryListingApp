import { connect } from 'react-redux'

import Home from './Home'
import { getCountries } from './dux'

const mapStateToProps = (state) => ({
  data: state.HomeReducer.data,
  loading: state.HomeReducer.loading
})

const mapDispatchToProps = {
  getCountries
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)