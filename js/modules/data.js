export const user = {
  name: 'Mike',
  age: 25,
  hasCar: true,
};
const key = 'name';
console.log('user[key]  ===', user[key]);

// parasyti funkcija checkErrors() app.js, ima klaidu masyva(errors1)
// grazinti true jei nors viena objeto reikmes yra ne tuscia
// kitu atveju false
const errors1 = {
  name: '',
  password: '',
  town: 'cant be blank',
};
const errors2 = {
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
