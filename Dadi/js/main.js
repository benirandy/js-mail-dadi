let userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
let cpNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpNumber);


if (userNumber > cpNumber) {
   console.log('winner');
} else if (userNumber < cpNumber) {
   console.log('loser');
} else {
   console.log('null');
}