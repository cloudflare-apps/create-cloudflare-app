(function () {
  if (!window.addEventListener) return // Check for IE9+

  let options = INSTALL_OPTIONS

  function updateElement() {
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
