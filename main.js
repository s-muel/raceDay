let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 19;

if (age > 18 && registeredEarly === true) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 AM race number: ${ raceNumber}`);
} else if (age > 18 && registeredEarly !== true  ) {
   console.log(`You will race at 11:00 AM race number: ${ raceNumber}`);
} else if (age < 18) {
  console.log(`You will race at 12:30 PM race number: ${ raceNumber}`);
} else {
  console.log('See registration desk')
}
