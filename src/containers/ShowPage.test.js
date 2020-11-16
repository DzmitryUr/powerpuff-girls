import { render, screen } from '../utils/testUtils';
import { unmountComponentAtNode } from 'react-dom';
import ShowPage from './ShowPage';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

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

it('Renders the connected app with initialState', () => {
  render(
    <BrowserRouter>
      <ShowPage />
    </BrowserRouter>,
    {
      initialState: {
        show: { show: { id: 6771, name: 'The Powerpuff Girls' }, showError: false },
        episodes: { episodes: [{ id: 1, name: 'Episode1' }] },
      },
    }
  );

  expect(screen.getByText(/The Powerpuff Girls/i)).toBeInTheDocument();
});

it('should check ShowPage snapshots', () => {
  act(() => {
    render(
      <BrowserRouter>
        <ShowPage />
      </BrowserRouter>,
      {
        initialState: {
          show: { show: { id: 6771, name: 'The Powerpuff Girls' }, showError: false },
          episodes: { episodes: [{ id: 1, name: 'Episode1' }] },
        },
        container,
      }
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"page\\">
      <div class=\\"align-center\\">
        <h1>The Powerpuff Girls</h1>
      </div>
      <div class=\\"main-content\\">
        <div><img class=\\"cover-image\\" src=\\"https://static.tvmaze.com/images/no-img/no-img-landscape-text.png\\" alt=\\"poster\\"></div>
        <div class=\\"summary\\"></div>
      </div>
      <div class=\\"align-center\\">
        <h2>Episodes</h2>
      </div>
      <div>
        <div><a href=\\"/episodes/1\\">Episode1 (Season undefined, Number undefined)</a>
          <hr>
        </div>
      </div>
    </div>"
  `); /* ... gets filled automatically by jest ... */
});
