// Imports the .json files of all the separate data
import shieldsData from '/src/data/Shields.json';
import { items } from './items';


// Converts each individual .json file to js objects
const shields = shieldsData.reduce((map, { key, ...rest }) => {
  map[key] = rest;
  return map;
}, {});


// Consolidates all the individual js objects into one js object
const AllData = {
    ...shields,
    ...items
}

export { AllData };