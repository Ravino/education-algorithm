"use strict";

const readFile = require ("./readFile.js");
const parserString = require ("./parserString.js");


readFile ("./dataSet.txt"). then ( data => {

  parserString (data). then ( dataStrings => {
    
  });
});
