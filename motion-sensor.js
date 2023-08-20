const pir = 28; // PIR (GP28)
const led = 15; // LED (GP15)

pinMode(pir, INPUT);
pinMode(led, OUTPUT);

// 定时获取motion-sensor的值
setInterval(function () {
  let motion = digitalRead(pir);
  // 当值改变的时候进行等的开启与关闭
  if (motion === HIGH) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}, 100);
