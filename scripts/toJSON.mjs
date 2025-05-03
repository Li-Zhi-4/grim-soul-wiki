import fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

// 1. Read & parse your workbook
const workbook  = XLSX.readFile('src/data/Shields.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
// IMPORTANT: defval:null so empty cells show up as null
const rows      = XLSX.utils.sheet_to_json(worksheet, { defval: null });

// 2. Transform each row into the shape you want
const formatted = rows.map(item => {
  // --- crafting as before ---
  const recipeValues = [];
  if (item.crafting != null) recipeValues.push(item.crafting);
  for (const key of Object.keys(item)) {
    if (key.startsWith('__EMPTY')) {
      recipeValues.push(item[key]);
    }
  }

  let finalRecipe;
  if (recipeValues.length === 1 && recipeValues[0] === 'Not craftable') {
    finalRecipe = { 'Not craftable': '' };
  } else {
    const recipe = {};
    for (let i = 0; i < recipeValues.length; i += 2) {
      const name = recipeValues[i];
      const qty  = recipeValues[i+1];
      if (name) recipe[name] = qty;
    }
    finalRecipe = recipe;
  }

  // --- obtained splitting ---
  let obtainedList = [];
  if (item.obtained != null) {
    obtainedList = item.obtained
      .toString()
      .split(/\r?\n/)         // split on line breaks
      .map(line => line.trim())
      .filter(line => line);  // drop empty strings
  }

  // --- build our output object ---
  const output = { ...item };
  // remove flat crafting fields
  delete output.crafting;
  for (const key of Object.keys(item)) {
    if (key.startsWith('__EMPTY')) delete output[key];
  }
  // overwrite with nested recipe and list of obtained lines
  output.crafting = finalRecipe;
  output.obtained = obtainedList;

  return output;
});

// 3. Stringify & write to Shields.json
const outPath    = path.resolve('src/data', 'Shields.json');
const jsonString = JSON.stringify(formatted, null, 2);
fs.writeFileSync(outPath, jsonString, 'utf8');

console.log(`Wrote ${formatted.length} items to ${outPath}`);