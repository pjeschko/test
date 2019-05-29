var readlineSync = require('readline-sync');

var answer = readlineSync.question('are you hungry?');

if (answer == 'yes')
{
  console.log('eat pizza');
  console.log('eat burger');
  console.log('eat noodles');
  console.log('eat steak');
  console.log('eat pasta');
}
else
{
  console.log('do your homework');
  answer = readlineSync.question('are you thristy?');
  if (answer == 'yes'){
    console.log('dring water');
    console.log('dring soda');
    console.log('coke');
  }
}