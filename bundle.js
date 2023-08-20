/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const pin = 8;
pinMode(pin, INPUT_PULLUP);
const led = 6;
pinMode(led, OUTPUT);

var id = setWatch(
  () => {
    console.log(`click`);
    digitalToggle(led);
  },
  pin,
  FALLING,
  50
);

/******/ })()
;