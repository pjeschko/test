const readline = require('readline');

// define input and outuput
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// I just add some comments
rl.question('Are you hungry? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log('this is my last change');
  rl.close();
});