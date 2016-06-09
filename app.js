(function () {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS
  let element

  function updateElement() {
    element = Eager.createElement(options.location, element)

    const welcome = document.createElement("eager-welcome")

    welcome.innerText = options.welcomeText
    welcome.className = "eager-welcome"
    element.appendChild(welcome)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  window.INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
