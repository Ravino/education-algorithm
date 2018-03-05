"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const newArray = [];


    for (let i in data) {

      newArray [i] = [];


      for (let k in data [i]) {
        newArray [i] [k] = data [i] [k];
      }


      newArray [i] [0] = new Date (newArray [i] [0]). getTime ();
    }


    resolve (newArray);
    return true;
  });
};
