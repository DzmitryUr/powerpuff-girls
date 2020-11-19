import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EpisodeDetails from './EpisodeDetails';

it('should render error EpisodeDetails snapshot', () => {
  const { container } = render(
    <EpisodeDetails episodeError={true} fetchEpisode={() => {}} match={{ params: { id: 10 } }} />
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="error"
    >
      Error by loading Episode. Please try to reload
    </div>
  `);
});

it('should render loading EpisodeDetails snapshot', () => {
  const { container } = render(
    <EpisodeDetails episodeError={false} fetchEpisode={() => {}} match={{ params: { id: 10 } }} />
  );
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="loading"
    >
      Loading...
    </div>
  `);
});
