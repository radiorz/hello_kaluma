const led = 25;
pinMode(led, OUTPUT);
setInterval(() => {
  digitalToggle(led);
  console.log('123') // 这个会在shell 中显示
}, 1000);
