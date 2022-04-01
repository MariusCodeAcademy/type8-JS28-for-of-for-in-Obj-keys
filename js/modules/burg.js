const res1 = addName({}, 'Brutus', 300); //  ➞ { Brutus: 300 }

const res2 = addName({ piano: 500 }, 'Brutus', 400); //  ➞ { piano: 500, Brutus: 400 }

const res3 = addName({ piano: 500, stereo: 300 }, 'Caligula', 440); // ➞ { piano: 500, stereo: 300, Caligula: 440 }

function addName(argObj, name, price) {
  argObj[name] = price;
  return argObj;
}

console.log('res1 ===', res1);
console.log('res2 ===', res2);
console.log('res3 ===', res3);
