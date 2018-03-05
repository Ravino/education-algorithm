"use strict";

const readFile = require ("./global/readFile.js");
const parserString = require ("./global/parserString.js");
const removeSpace = require ("./global/removeSpace.js");
const toNumber = require ("./global/toNumber.js");
const joinData = require ("./global/join.js");
const print = require ("./global/print.js");
const toTimeUtc = require ("./cityPhoneA/toTimeUtc.js");
const selectTalksFromMart = require ("./cityPhoneA/selectTalksFromMart.js");
const sort = require ("./cityPhoneA/sort.js");
const toTimeGmt = require ("./cityPhoneA/toTimeGmt.js");


readFile ("./data.txt"). then ( data => {

  parserString (data). then (dataString => {

    removeSpace (dataString). then (dataStringNotSpace => {

      toNumber (dataStringNotSpace). then ( dataInt => {

        toTimeUtc (dataInt). then (dataTimeUtc => {

          selectTalksFromMart (dataTimeUtc). then ( dataResultSelectTalks => {

            sort (dataResultSelectTalks). then ( dataSort => {

              toTimeGmt (dataSort). then ( dataTimeGmt => {

                joinData (dataTimeGmt). then ( dataJoin => {
                  print (dataJoin);
                });

              });

            });

          });

        });

      });

    });

  });

});
