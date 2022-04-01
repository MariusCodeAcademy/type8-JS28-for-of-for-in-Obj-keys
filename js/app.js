import { user, errors1, errors2 } from './modules/data.js';
import { checkErrors } from './modules/helper.js';
console.log('app');

// iskonsolinti user objekta app.js
console.log('user ===', user);

// for (key in object) {

// atspausdinti visus user keys

for (let key in user) {
  // console.log('key ===', key);
}
const keysArr = [];
for (let key in user) {
  keysArr.push(key);
}
// console.log('keysArr ===', keysArr);

// atspaustindi visas user objekto reiksmes
for (let key in user) {
  // console.log(user[key]);
}

// sudeti i masyva visas user reiksmes
const valuesArr = [];
for (let key in user) {
  valuesArr.push(user[key]);
}
// console.log('valuesArr ===', valuesArr);

// Object.keys({}) - grazina objekto keys masyvo pavidalu
const obKeys = Object.keys(user);
// console.log('obKeys ===', obKeys);
// Object.values({}) - grazina objekto values masyvo pavidalu
const obValues = Object.values(user);
// console.log('obValues ===', obValues);
// Object.entries({}) - grazina objekto keys ir values masyvo masyve pavidalu
const obEntries = Object.entries(user);
// console.log('obEntries ===', obEntries);
// is obEntries gauti metus

// console.log(obEntries[1][1]);

const err1Result = checkErrors(errors1);
console.log('err1Result ===', err1Result);
const err2Result = checkErrors(errors2);
console.log('err2Result ===', err2Result);
