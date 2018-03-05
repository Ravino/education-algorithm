"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {


    const newArray = [];


    for (let i in data) {

      newArray [i] = [];


      for (let k in data [i]) {
        newArray [i] [k] = data [i] [k];
      }


      newArray [i] [4] = data [i] [2] * data [i] [3];
    }


    resolve (newArray);
  });
};
