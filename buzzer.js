//buzzer 蜂鸣器

const pin = 12;
const tones = [262, 294, 330, 370, 392, 440, 466, 523];
for (const _tone of tones) {
  tone(pin, _tone);
  delay(500);
}
noTone(pin);
