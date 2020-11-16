import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import EpisodeDetails from './EpisodeDetails';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should check EpisodeDetails snapshots', () => {
  act(() => {
    render(
      <EpisodeDetails episodeError={true} fetchEpisode={() => {}} match={{ params: { id: 10 } }} />,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"error\\">Error by loading Episode. Please try to reload.</div>"`
  );

  act(() => {
    render(
      <EpisodeDetails episodeError={false} fetchEpisode={() => {}} match={{ params: { id: 10 } }} />,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<div class=\\"loading\\">Loading...</div>"`);
});
