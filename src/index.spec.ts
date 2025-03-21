import { codeStyleNodeJs } from './index';

describe('index', () => {
  const expectedKeys = ['commitlint', 'prettier'] as const;

  it(`should have exactly ${expectedKeys.length} keys`, () => {
    expect(Object.keys(codeStyleNodeJs).length).toBe(expectedKeys.length);
  });

  it('should have all expected keys', () => {
    expect(Object.keys(codeStyleNodeJs)).toEqual(expectedKeys);
  });

  it.each(expectedKeys)(
    'should have "%s" as a valid object in codeStyleNodeJs',
    (property) => {
      expect(codeStyleNodeJs).toBeInstanceOf(Object);
      expect(codeStyleNodeJs).toHaveProperty(property);
      expect(
        (codeStyleNodeJs as Record<string, unknown>)[property],
      ).toBeInstanceOf(Object);
    },
  );
});
