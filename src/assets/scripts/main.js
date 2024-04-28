/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as Popper from "@popperjs/core";
import * as bootstrap from "bootstrap";

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

/* Carousel */
const myCarouselElement = document.querySelector("#my-carousel");

if (myCarouselElement) {
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 6000,
    touch: false,
  });
}

/* Tooltips */
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);

const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
