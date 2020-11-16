import * as actions from './index';

describe('powerpuff girls actions', () => {
  it('setShow should create SET_SHOW action', () => {
    expect(actions.setShow({ id: 1, name: 'The Powerpuff girls' })).toEqual({
      type: 'SET_SHOW',
      show: { id: 1, name: 'The Powerpuff girls' },
    });
  });

  it('setShowError should create SET_SHOW_ERROR action', () => {
    expect(actions.setShowError(true)).toEqual({
      type: 'SET_SHOW_ERROR',
      showError: true,
    });
  });

  it('setEpisodes should create SET_EPISODES action', () => {
    expect(
      actions.setEpisodes([
        { id: 1, name: 'Episode 1' },
        { id: 2, name: 'Episode2' },
      ])
    ).toEqual({
      type: 'SET_EPISODES',
      episodes: [
        { id: 1, name: 'Episode 1' },
        { id: 2, name: 'Episode2' },
      ],
    });
  });

  it('setEpisodesError should create SET_EPISODES_ERROR action', () => {
    expect(actions.setEpisodesError(false)).toEqual({
      type: 'SET_EPISODES_ERROR',
      episodesError: false,
    });
  });

  it('setEpisode should create SET_EPISODE action', () => {
    expect(actions.setEpisode({ id: 1, name: 'Episode 1', summary: 'desc1' })).toEqual({
      type: 'SET_EPISODE',
      episode: { id: 1, name: 'Episode 1', summary: 'desc1' },
    });
  });

  it('setEpisodeError should create SET_EPISODE_ERROR action', () => {
    expect(actions.setEpisodeError(true)).toEqual({
      type: 'SET_EPISODE_ERROR',
      episodeError: true,
    });
  });
});
