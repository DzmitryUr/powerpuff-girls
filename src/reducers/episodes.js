import { SET_EPISODES, SET_EPISODE, SET_EPISODES_ERROR, SET_EPISODE_ERROR } from '../actions';

const defaultState = {
  episodes: [],
  episodesError: false,
  episode: {},
  episodeError: false,
};

const episodes = (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_EPISODES:
      return { ...state, episodes: action.episodes };
    case SET_EPISODES_ERROR:
      return { ...state, episodesError: action.episodesError };
    case SET_EPISODE:
      return { ...state, episode: action.episode };
    case SET_EPISODE_ERROR:
      return { ...state, episodeError: action.episodeError };
    default:
      return state;
  }
};

export default episodes;
