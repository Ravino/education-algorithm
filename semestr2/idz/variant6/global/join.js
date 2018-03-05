"use strict";


module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const newArray = [];


    for (let i in data) {
      newArray [i] = data [i]. join ("|");
    }


    resolve (newArray);
    return true;
  });
};
