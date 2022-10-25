// Given a string, verify if the parentheses are valid

export default function validParentheses(input: string): boolean {
  const bracketPairs = new Map(
    Object.entries({ '(': ')', '{': '}', '[': ']', '<': '>' })
  );
  const bracketPairsReverse = new Map(
    Object.entries({ ')': '(', '}': '{', ']': '[', '>': '<' })
  );

  const stack = new Array<string>();

  for (const i of input) {
    if (bracketPairs.get(i)) {
      stack.push(i);
    } else if (bracketPairsReverse.get(i)) {
      if (!stack.length) {
        return false;
      }
      if (bracketPairs.get(stack.pop()) !== i) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}
