(function () {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  // updateElement runs every time the options are updated.
  // Most of your code will end up inside this function.

  function updateElement() {
    element = Eager.createElement(options.location, element)

    element.textContent = options.welcomeText
    element.className = "eager-welcome"
  }

  // This code ensures that the app doesn't run before the page is loaded.

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  // INSTALL_SCOPE is an object that is used to communicate with other Eager scripts.
  // This is usually just used to update your options.
  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
