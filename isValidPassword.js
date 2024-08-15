export function isValidPassword(line) {
  const [rule, password] = line.split(': ');
  const [char, range] = rule.split(' ');
  const [min, max] = range.split('-').map(Number);

  const charCount = (password.match(new RegExp(char, 'g')) || []).length;

  return charCount >= min && charCount <= max;
}

// TEST EXAMPLE
// const exampleLine = "a 1-5: abcdj";
// console.log(`Is the password valid? ${isValidPassword(exampleLine)}`);