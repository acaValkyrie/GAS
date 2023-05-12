var global = this;
function main() {
}
"use strict";
(() => {
  // src/index.ts
  function main() {
    console.log("Hello, world");
  }
  global.main = main;
})();
