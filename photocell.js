
const pin = 26; // ADC0
setInterval(() => {
  // 读取串口
  let value = analogRead(pin);
  console.log(value);
}, 1000);
