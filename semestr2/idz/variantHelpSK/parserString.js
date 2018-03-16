"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const newArrayStrings = data. split ("\n");
    const newArraysStrings = [];


    delete newArrayStrings [newArrayStrings. length - 1];


    for (let i in newArrayStrings) {
      newArraysStrings [i] = newArrayStrings [i]. split (" ");
    }


    resolve (newArraysStrings);
    return true;
  });
};
