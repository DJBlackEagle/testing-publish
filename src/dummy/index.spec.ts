import { dummy } from './index';

describe('dummy', () => {
  const expectedKeys = ['goodBye', 'hello', 'howAreYou'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(dummy).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(dummy)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid function in dummy',
    (property) => {
      expect(dummy).toBeInstanceOf(Object);
      expect(dummy).toHaveProperty(property);
      expect((dummy as Record<string, unknown>)[property]).toBeInstanceOf(
        Function,
      );
    },
  );
});
