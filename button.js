const { Button } = require("button");
const btn = new Button(14);
btn.on("click", () => {
  console.log(`clicked`);
});
