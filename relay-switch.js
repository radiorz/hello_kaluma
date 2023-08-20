// 继电器
const pin = 0;
pinMode(pin, OUTPUT);
setInterval(() => {
  digitalToggle(pin);
}, 3000);
