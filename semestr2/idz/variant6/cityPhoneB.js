"use strict";

const readFile = require ("./global/readFile.js");
const parserString = require ("./global/parserString.js");
const removeSpace = require ("./global/removeSpace.js");
const toNumber = require ("./global/toNumber.js");
const sumTalks = require ("./cityPhoneB/sumTalks.js");
const joinData = require ("./global/join.js");
const print = require ("./global/print.js");
const sort = require ("./cityPhoneB/sort.js");


readFile ("./data.txt"). then ( data => {

  parserString (data). then ( dataString => {

    removeSpace (dataString). then ( dataStringNotSpace => {

      toNumber (dataStringNotSpace). then ( dataInt => {

        sumTalks (dataInt). then ( dataSumTalks => {

          sort (dataSumTalks). then ( dataSortSumTalks => {

            joinData (dataSortSumTalks). then (dataJoin => {
              print (dataJoin);
            });

          });

      });

    });

    });

  });

});
