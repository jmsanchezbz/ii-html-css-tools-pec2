/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

const myCarouselElement = document.querySelector("#my-carousel");

if (myCarouselElement) {
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 4000,
    touch: false,
  });
}
