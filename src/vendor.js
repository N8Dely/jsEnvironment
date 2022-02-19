/* This file contains references to the vendor libraries we're using in the project. This is used by webpack in production build only*. A seperate bundle for vendor codeis useful since its unlikely to change as often as the applications code. So all the libraries we reference here will be written to vendor.js so they can be chached until one of them change. So basically, this avoids customers having to downlod a huge JS file anytime a line of code changes. They only have to download vendor.js when a vendor library changes which should be less frequent. Any files that arent referenced here will be bundled into main.js for production build. */

/* eslint-disable no-unused-wars */

import fetch from 'whatwg-fetch';
