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
