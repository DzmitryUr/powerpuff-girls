import episodes from './episodes';

describe('episodes reducer', () => {
  it('should handle initial state', () => {
    expect(episodes(undefined, {})).toEqual({
      episodes: [],
      episodesError: false,
      episode: {},
      episodeError: false,
    });
  });

  it('should handle SET_EPISODES', () => {
    expect(
      episodes(
        {},
        {
          type: 'SET_EPISODES',
          episodes: [
            { id: 1, name: 'Episode1', summary: 'description1' },
            { id: 2, name: 'Episode2', summary: 'description2' },
          ],
        }
      )
    ).toEqual({
      episodes: [
        { id: 1, name: 'Episode1', summary: 'description1' },
        { id: 2, name: 'Episode2', summary: 'description2' },
      ],
    });
  });

  it('should handle SET_EPISODES_ERROR', () => {
    expect(
      episodes(
        {},
        {
          type: 'SET_EPISODES_ERROR',
          episodesError: true,
        }
      )
    ).toEqual({
      episodesError: true,
    });
  });
});
