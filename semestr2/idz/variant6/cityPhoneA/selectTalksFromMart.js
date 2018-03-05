"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const begin = new Date ("01-03-2015"). getTime ();
    const end = new Date ("31-03-2015"). getTime ();


    const newArray = [];


    for (let i in data) {
      if (begin <= data [i] [0]  ||  data [i] [0] == end) {
        newArray. push (data [i]);
      }
    }


    resolve (newArray);
    return true;
  });
};
