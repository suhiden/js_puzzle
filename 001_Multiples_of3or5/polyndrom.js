function polyndrom(str) {
  str.toLowerCase();
  return str == str.split("").reverse().join("");
}

console.log(polyndrom("fof11fof"));
