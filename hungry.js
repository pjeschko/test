var readlineSync = require('readline-sync');

var answer = readlineSync.question('are you hungry?');

<<<<<<< HEAD
// I just add some comments
rl.question('Are you hungry? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);
  console.log('eat fries');
  rl.close();
});
=======
if (answer == 'yes')
{
  console.log('eat pizza');
  console.log('eat burger');
  console.log('eat noodles');
}
else
{
  console.log('do your homework');
  answer = readlineSync.question('are you thristy?');
  if (answer == 'yes'){
    console.log('dring water');
    console.log('dring soda');
  }
}
>>>>>>> thristy
