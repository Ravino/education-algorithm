"use strict";

const fs = require ("fs");


module. exports = (path) => {

  return new Promise ( (resolve, regect) => {

    fs. readFile (path, "utf8", (err, data) => {

      if (err) {
        regect (err);
        return false;
      }


      resolve (data);
      return true;
    });
  });
};
