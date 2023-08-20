const led = 25
const led2 = 6
pinMode(led, OUTPUT);
pinMode(led2, OUTPUT);
setInterval(() => {
  digitalToggle(led);
  digitalToggle(led2);
  console.log('led',led)
  console.log('led',led2)
}, 1000);
