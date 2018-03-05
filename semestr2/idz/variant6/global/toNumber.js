"use strict";


module. exports = (data) => {

  return new Promise ( (resolve, regect) => {


    const newArray = [];


    for (let i in data) {

      newArray [i] = [];


      for (let k in data [i]) {
        newArray [i] [k] = data [i] [k];
      }


      newArray [i] [2] = Number (data [i] [2]);
      newArray [i] [3] = Number (data [i] [3]);
    }


    resolve (newArray);
  });
};
