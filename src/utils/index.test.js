import { removeTags } from '../utils';

it('removes tags from string', () => {
  expect(removeTags('<div><p>Test <a href="#">String</a></p></div>')).toBe('Test String');
});

it('should return empty string', () => {
  expect(removeTags()).toBe('');
});
