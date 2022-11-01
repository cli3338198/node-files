"use strict";

const fsP = require("fs/promises");
const axios = require("axios");

/**
 * webCat: should read the file/url with that path, and print the contents or page
 * - takes one argument: path
 */
async function webCat(path) {
  try {
    if (validateURL(path)) {
      const response = await axios.get(path);
      console.log(response);
    }
    else {
      const contents = await fsP.readFile(path, "utf8");
      console.log(contents);
    }
  } catch (err) {
    // display the error
    console.log("Invalid URL/file'");
  }
}

webCat(process.argv[2]);
// Check if domain starts with HTTP/HTTPS
function validateURL(url) {
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);
// Ternary
  if (url.match(regex)) {
    return true;
  } else {
    return false;
  }
}