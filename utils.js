//jshint esversion:6
import _ from 'lodash';
import {grammar} from './grammar.js';
import cy from "./graph.js";

export var newId = function(symbol){
  if(typeof symbol == 'undefined')
    symbol = 'S';
  return symbol + '-' + window.btoa(Math.floor(Math.random()*100000).toString());
};

export var addName = async (elem, symbol) => {
  console.log(`Emitting name ${symbol}`);
  let child = elem.cy.add({
    id:newId(symbol),
    terminal: false,
    level: +elem.data('level') + 1
  });
  elem.cy.add({
    source: elem,
    target: child
  });
  return child;
};
//TODO make this more functional, and not just copypasta
export var addTerminal = async (elem, symbol) => {
  console.log(`Emitting terminal ${symbol}`);
  let child = elem.cy.add({
    id:newId(symbol),
    terminal: true,
    level: +elem.data('level') + 1
  });
  elem.cy.add({
    source: elem,
    target: child
  });
  return child;
};
export const wait = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
