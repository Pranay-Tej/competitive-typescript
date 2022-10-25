import validParentheses from '../validParentheses';

describe.concurrent('validParentheses', () => {
  test('should return true if parentheses are balanced', () => {
    expect(validParentheses('()')).toBe(true);
    expect(validParentheses('(abc)')).toBe(true);
    expect(validParentheses('(())')).toBe(true);
    expect(validParentheses('()()')).toBe(true);
    expect(validParentheses('[()]{}{[()()]()}')).toBe(true);
    expect(validParentheses('[()]{}{[(a)(b)](c)}')).toBe(true);
  });

  test('should return false if parentheses are not balanced', () => {
    expect(validParentheses('([]')).toBe(false);
    expect(validParentheses('(')).toBe(false);
    expect(validParentheses(')')).toBe(false);
    expect(validParentheses('[(])')).toBe(false);
    expect(validParentheses('())')).toBe(false);
    expect(validParentheses('()(')).toBe(false);
  });
});
