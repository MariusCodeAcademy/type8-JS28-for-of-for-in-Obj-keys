// iskelti checkErrors i helper.js

export function checkErrors(errorObj) {
  // gauti obj reiksmes
  // debugger;
  for (let key in errorObj) {
    let value = errorObj[key];
    if (value.length > 0) {
      return true;
    }
  }
  return false;
}

export function checkErrors2(errorObj) {
  return Object.values(errorObj).some((reiks) => reiks.length > 0);
}

// sukurti funkcija kuri priima argumentu htmlTaga, texta, clasesVarda ir tevine html elementa.
// sukuria elementa ir ideda i tevini el
makeMeEl('div', '', 'card', appEl);
makeMeEl('p', 'kazoks text', 'card__text', divEl);
