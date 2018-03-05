"use strict";

const trim = require ("trim");


module. exports = (data) => {

  return new Promise ( (resolve, regect) => {


    const newArray = [];


    for (let i in data) {

      newArray [i] = [];


      for (let k in data [i]) {
        newArray [i] [k] = trim (data [i] [k]);
      }
    }


    resolve (newArray);
  });
};
