# Example Babel App

*Get going with Eager!*

This is our example app with Babel support. Download this app and replace our code 
any time you want to build an Eager app. In order to get babel installed for this 
project, run the setup command in CLI in the root directory of this project, and
get it running with the usage commands below.

<a href="https://github.com/EagerApps/ExampleBabelApp/archive/v1.0.0.zip" >Download the zip</a>

## Setup

`npm install`

## Usage

* `npm run watch:js`: Watch for Javascript changes an compile them.

* `npm run watch:css`: Watch for CSS changes an compile them.

## Important notes

#### app.js

App.js is where all of the Javascript code goes. There a few main parts of app.js
to know

`updateElement`

updateElement is a function that runs every time the page is updated with new options
from the install.json. Most of your code will end up inside this function. Any code
not inside this function will not update when options are updated.

`if (!window.addEventListener) return`

This is just a simple check to make sure whoever uses our app is  using IE9 or greater
for their browser. A lot of older browsers don't support all of the new JS goodies,
so we can't support older browsers.

`if (document.readyState === "loading")`

We use this to make sure that Eager apps load at the approporiate times. Some apps
need to call on elements that exist inside of the page, so if the app started running
before the page was loaded, the app wouldn't work

`window.INSTALL_SCOPE`

INSTALL_SCOPE is an object that is used to communicate with other Eager scripts.
This is usually just used to update your options.

#### app.css

This is where all the CSS for an app goes. Try to refrain from styling an app directly
in the JS whenever possible

#### install.json

This is where all the options are added for the app. For a better explanation on how
to add options and how json's work, check these sources below.

https://eager.io/developer/docs/install-json

http://install.json.is/

#### Additional notes

- Read the <a href="https://eager.io/developer/docs/getting-started">docs</a>
- Make sure to prefix any classes and div's with `eager`, like shown in this app



<a href="https://eager.io/app/example-babel-app/install?source=button">
  <img
    src="https://install.eager.io/install-button.png"
    alt="Install Example Babel App with Eager"
    border="0"
    width="140">
</a>
