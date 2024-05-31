(function () {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /* ACTIVACION DEL AOS*/
  (function () {
    "use strict";

    /*ESTO SIRVE*/
    /**
     * Animation on scroll
     */
    window.addEventListener("load", () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    });
    });
  })();
})();
