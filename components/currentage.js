function currentAge(dob) {
    let diff = Date.now() - dob.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}

let myAge = currentAge(new Date(1993, 5, 2));

export { myAge }
