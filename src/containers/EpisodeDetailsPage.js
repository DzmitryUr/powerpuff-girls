import { connect } from 'react-redux';
import { fetchEpisode } from '../actions';

import EpisodeDetails from '../components/EpisodeDetails';

const mapStateToProps = (state) => {
  return {
    episode: state.episodes.episode,
    episodeError: state.episodes.episodeError,
  };
};

export default connect(mapStateToProps, { fetchEpisode })(EpisodeDetails);
