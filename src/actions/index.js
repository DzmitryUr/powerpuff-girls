import ApiClient from '../api/ApiClient';

export const SET_SHOW = 'SET_SHOW';
export const SET_SHOW_ERROR = 'SET_SHOW_ERROR';
export const SET_EPISODES = 'SET_EPISODES';
export const SET_EPISODES_ERROR = 'SET_EPISODES_ERROR';
export const SET_EPISODE = 'SET_EPISODE';
export const SET_EPISODE_ERROR = 'SET_EPISODE_ERROR';

export const setShow = (show) => {
  return {
    type: SET_SHOW,
    show,
  };
};

export const setShowError = (showError) => {
  return {
    type: SET_SHOW_ERROR,
    showError,
  };
};

export const setEpisodes = (episodes) => {
  return {
    type: SET_EPISODES,
    episodes,
  };
};

export const setEpisodesError = (episodesError) => {
  return {
    type: SET_EPISODES_ERROR,
    episodesError,
  };
};

export const setEpisode = (episode) => {
  return {
    type: SET_EPISODE,
    episode,
  };
};

export const setEpisodeError = (episodeError) => {
  return {
    type: SET_EPISODE_ERROR,
    episodeError,
  };
};

export const fetchShow = () => async (dispatch) => {
  dispatch(setShowError(false));
  const [error, response] = await new ApiClient().fetchShow();
  if (error || !response) {
    return dispatch(setShowError(true));
  }
  console.log('fetchShow response=', response);
  dispatch(setShow(response.data));
};

export const fetchEpisode = (id) => async (dispatch) => {
  dispatch(setEpisodesError(false));
  const [error, response] = await new ApiClient().fetchEpisode(id);
  if (error || !response) {
    return dispatch(setEpisodeError(true));
  }
  console.log('fetchEpisode response=', response);
  dispatch(setEpisode(response.data));
};

export const fetchEpisodes = (id) => async (dispatch) => {
  dispatch(setEpisodeError(false));
  const [error, response] = await new ApiClient().fetchEpisodes();
  if (error || !response) {
    return dispatch(setEpisodesError(true));
  }
  console.log('fetchEpisodes response=', response);
  dispatch(setEpisodes(response.data));
};
