function checkNameLength(name1, name2) {
    if (name1.length > name2.length) {
      return name1.split("").reverse().join("");
    } else {
      return name2.split("").reverse().join("");
    }
}

const friends = checkNameLength("Harry", "Potter");
console.log(friends);