// 灯光调节器
// 旋转调节亮度

const led = 15;
// 这个是调节的端口
const potentiometer = 26;

// 定时获取角度取值
setInterval(() => {
  // 读取
  let val = analogRead(po);
  // 写入取值
  analogWrite(led, val);
}, 100);
