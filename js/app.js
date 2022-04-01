import { user } from './modules/data.js';
console.log('app');

// iskonsolinti user objekta app.js
console.log('user ===', user);

// for (key in object) {

// atspausdinti visus user keys

for (let key in user) {
  console.log('key ===', key);
}
const keysArr = [];
for (let key in user) {
  keysArr.push(key);
}
console.log('keysArr ===', keysArr);

// atspaustindi visas user objekto reiksmes
for (let key in user) {
  console.log(user[key]);
}

// sudeti i masyva visas user reiksmes
