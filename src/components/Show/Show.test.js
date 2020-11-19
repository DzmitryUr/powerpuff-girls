import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Show from './Show';

it('should render error Show snapshots', () => {
  const { container } = render(<Show showError={true} show={{ id: 1 }} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="error"
    >
      Error by loading Show. Please try to reload
    </div>
  `);
});

it('should render loading Show snapshots', () => {
  const { container } = render(<Show showError={false} fetchShow={() => {}} />);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="loading"
    >
      Loading...
    </div>
  `);
});
