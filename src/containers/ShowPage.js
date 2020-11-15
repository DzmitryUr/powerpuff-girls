import { connect } from 'react-redux';
import { fetchShow } from '../actions';

import Show from '../components/Show';

const mapStateToProps = (state) => {
  return {
    show: state.show.show,
    showError: state.show.showError,
  };
};

export default connect(mapStateToProps, { fetchShow })(Show);
