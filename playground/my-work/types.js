/* eslint-disable */

// The above block comment disables eslint for this file

// These all make strings
const nameWes = 'Wes'; // String literal
const middle = "Topher"; // String literal
const last = `Bos`; // Template literal

// You must escape single and double quotes if they are the same as the containing quotes
const sentence = 'she\'s so cool';
const sentence2 = "she's so cool";
const sentence3 = "she's so \"cool\"";

// You must escape newlines to avoid ASI (automatic semicolon insertion). The newlines are not preserved in this case.
const pizzaSong = 'Ohhh \
\
ya \
\
I like \
\
pizza';

// Backticks create a block string that avoids the need for escaping newlines but the newlines are also preserved.
const pizzaSong2 = `Ohhh 

ya 

I like 

pizza`;

// You can add newlines with '\n' (escaped newline)
const newlineInsertion = "Let's add \na new line";

// Concatenation
const hello = "Hello my name is " + nameWes + ". Nice to meet you.";

// Concatenation with mixed quote types
const hello2 = 'Hello my name is ' + nameWes + ". Nice to meet you.";

// Interpolation works with block quotes (backticks)
const hello3 = `Hello my name is ${nameWes}. Nice to meet you. I am ${100 + 1} years old.`;

// Using template literals to insert HTML
const html = `
  <div>
    <h2>${nameWes}</h2>
    <p>${hello3}</p>
  </div>
`;

document.body.innerHTML = html; // Not secure. Demonstration only.
