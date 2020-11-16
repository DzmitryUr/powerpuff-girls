import ApiClient from './ApiClient';

describe('api client', () => {
  it('checks if show data is fetched', async () => {
    const [error, response] = await new ApiClient().fetchShow();
    expect(error).toBeNull();

    const { data } = response;
    expect(data).not.toBeNull();
    expect(data.id).toEqual(6771);
    expect(data.name).toEqual('The Powerpuff Girls');
  });

  it('checks if episode data is fetched', async () => {
    const [error, response] = await new ApiClient().fetchEpisode(982635);
    expect(error).toBeNull();

    const { data } = response;
    expect(data).not.toBeNull();
    expect(data.id).toEqual(982635);
    expect(data.name).toEqual('Snow Month');
  });

  it('checks if episodes data is fetched', async () => {
    const [error, response] = await new ApiClient().fetchEpisodes();
    expect(error).toBeNull();

    const { data } = response;
    expect(data).not.toBeNull();
  });
});
