export const user = {
  name: 'Mike',
  age: 25,
  hasCar: true,
};
const key = 'name';
console.log('user[key]  ===', user[key]);

// parasyti funkcija checkErrors() app.js, ima klaidu obj(errors1)
// grazinti true jei nors viena objeto reikmes yra ne tuscia
// kitu atveju false
export const errors1 = {
  name: '',
  password: '',
  town: 'cant be blank',
};
export const errors2 = {
  name: '',
  password: '',
  town: '',
};

// parasyti funkcija helpers.js faile checkInputs(), gauna newUserObj kaip argumenta
// grazina true jei visos objekto reikmes yra supildytos
// grazina false jei nors viena reiksme tuscia
// panaudoti funkcija app.js su newUserObj ir newUserObj1
const newUserObj = {
  username: 'Mike545',
  password: '123456',
  gender: 'male',
  country: '',
};
const newUserObj1 = {
  username: 'Mike545',
  password: '123456',
  gender: 'male',
  country: 'Lithuania',
};

// helper.js parasyti funkcija isInputOk() kuri priima stringa ir tikrina
// jei stringas tuscias grazina 'cant be blank'
// jei stringas trumpesnis nei 3 simboliai grazina 'must be longer then 3'
// jei stringas ilgesnis nei 5 simboliai grazina 'cant be longer then 6'
// isInputOk(''); //  'cant be blank'
// isInputOk('ab'); //  'must be longer then 3'
// isInputOk('123456'); //  'cant be longer then 6'
