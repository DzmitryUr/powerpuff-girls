import { connect } from 'react-redux';
import { fetchEpisodes } from '../actions';

import Episodes from '../components/Episodes/Episodes';

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes.episodes,
    episodesError: state.episodes.episodesError,
  };
};

export default connect(mapStateToProps, { fetchEpisodes })(Episodes);
