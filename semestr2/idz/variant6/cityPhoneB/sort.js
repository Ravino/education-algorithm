"use strict";

module. exports = (data) => {

  return new Promise ( (resolve, regect) => {

    for (let i = 1; i < data. length; i++) {
      for (let g = i; g > 0  &&  data [g-1] [4] > data [g] [4]; g--){

        const oneTo = data [g-1];
        const tooTo = data [g];

        data [g] = oneTo;
        data [g-1] = tooTo;
      }
    }

    const revData = data. reverse ();

    resolve (revData);
    return true;
  });
};
