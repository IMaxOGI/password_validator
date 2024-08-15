import { isValidPassword } from './isValidPassword.js';
import fs from 'fs/promises';

async function validatePasswords() {
  try {
    const data = await fs.readFile('./passwords.txt', 'utf8');
    const lines = data.split('\n');
    let validPasswordsCount = 0;

    lines.forEach((line, index) => {
      if (line.trim()) {
        console.log(`\nProcessing line ${index + 1}: "${line.trim()}"`);
        const isValid = isValidPassword(line.trim());
        console.log(`Line is ${isValid ? 'valid' : 'invalid'}`);
        if (isValid) {
          validPasswordsCount++;
        }
      }
    });

    console.log(`\nNumber of valid passwords: ${validPasswordsCount}`);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

validatePasswords();