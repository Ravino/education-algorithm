"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const stringArray = data. split ("\n");
    const stringArrays = [];


    delete stringArray [stringArray. length - 1];


    for (let i in stringArray) {
      stringArrays [i] = stringArray [i]. split ("|");
    }


    resolve (stringArrays);
  });
};
