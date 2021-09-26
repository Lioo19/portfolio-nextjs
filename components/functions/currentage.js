function CurrentAge(dob) {
    let diff = Date.now() - dob.getTime();
    let age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
}

let myAge = CurrentAge(new Date(1993, 5, 2));

export { myAge }
