"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    const newArray = [];


    for (let i in data) {
      newArray [i] = data [i];
      newArray [i] [0] = new Date (newArray [i] [0]). toJSON ();
      newArray [i] [0] = newArray [i] [0]. substr (0, 10);
      newArray [i] [0] = newArray [i] [0]. split ("-"). reverse (). join ("-");
    }


    resolve (newArray);
    return true;
  });
};
