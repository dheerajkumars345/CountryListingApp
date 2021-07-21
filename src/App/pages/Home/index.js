import { connect } from 'react-redux'

import Home from './Home'
import { getData } from './dux'

const mapStateToProps = (state) => ({
  data: state.HomeReducer.data,
  loading: state.HomeReducer.loading
})

const mapDispatchToProps = {
  getData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)