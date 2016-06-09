"use strict";

(function () {
  if (!window.addEventListener) return; // Check for IE9+

  var options = INSTALL_OPTIONS;
  var element = void 0;

  function updateElement() {
    element = Eager.createElement(options.location, element);

    var welcome = document.createElement("eager-welcome");

    welcome.innerText = options.welcomeText;
    welcome.className = "eager-welcome";
    element.appendChild(welcome);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement);
  } else {
    updateElement();
  }

  window.INSTALL_SCOPE = {
    setOptions: function setOptions(nextOptions) {
      options = nextOptions;

      updateElement();
    }
  };
})();