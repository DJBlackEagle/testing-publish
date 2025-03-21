import { eslint } from './index';

describe('eslint', () => {
  const expectedKeys = ['configs', 'rules'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(eslint).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(eslint)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in eslint',
    (property) => {
      expect(eslint).toBeInstanceOf(Object);
      expect(eslint).toHaveProperty(property);
      expect((eslint as Record<string, unknown>)[property]).toBeInstanceOf(
        Object,
      );
    },
  );
});
