import show from './show';

describe('show reducer', () => {
  it('should handle initial state', () => {
    expect(show(undefined, {})).toEqual({ show: {}, showError: false });
  });

  it('should handle SET_SHOW', () => {
    expect(
      show(
        {},
        {
          type: 'SET_SHOW',
          show: { id: 1, name: 'The Powerpuff Girls', summary: 'description' },
        }
      )
    ).toEqual({
      show: {
        id: 1,
        name: 'The Powerpuff Girls',
        summary: 'description',
      },
    });
  });

  it('should handle SET_SHOW_ERROR', () => {
    expect(
      show(
        {},
        {
          type: 'SET_SHOW_ERROR',
          showError: true,
        }
      )
    ).toEqual({
      showError: true,
    });
  });
});
