import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import Show from './Show';

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

it('should check Show snapshots', () => {
  act(() => {
    render(<Show showError={true} show={{ id: 1 }} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"error\\">Error by loading Show. Please try to reload.</div>"`
  );

  act(() => {
    render(<Show showError={false} fetchShow={() => {}} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`"<div class=\\"loading\\">Loading...</div>"`);
});
