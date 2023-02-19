// const friend = [
//   { name: "abul", friend: "babul" },
//   { name: "babul", friend: "abul" },
// ];

function isBestfriend(friendOne, friendtwo) {
    if ((friendOne.name === friendtwo.friend) && (friendtwo.name === friendOne.friend)) {
        return true;
    } else {
        return false;
    }
}

const friends = isBestfriend(
  { name: "abul", friend: "kabul" },
  { name: "kabul", friend: "sabul" }
);
console.log(friends);


