"use strict";

const fsP = require("fs/promises");

/**
 * cat: should read the file with that path, and print the contents of that file.
 * - takes one argument: path
 */
async function cat(path) {
  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.log("ENOENT: no such file or directory, open 'huh.txt'");
  }
}

cat(process.argv[2]);
