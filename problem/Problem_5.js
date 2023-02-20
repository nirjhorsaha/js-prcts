/** problem-5:
 * this  gemsToDiamond() - function take an array as an input, after that it will take three numbers (the number of gems of 3 friends) as input. Then it will find out how many diamonds you will get in total by combining the gems of all friends. If the number of total diamond exceeds 1000 then 2000 will be subtracted from the total diamond and the remaining diamonds will be returned.
 */

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    if (
      (typeof firstFriend !== "number") ||
      (typeof secondFriend !== "number") ||
      (typeof thirdFriend !== "number")
    ) {
        return "Please enter a number"; // check validation
    } else {
        const firstFriendCapability = 21;
        const secondFriendCapability = 32;
        const thirdFriendCapability = 43;

        const firstFriendGems = firstFriend * firstFriendCapability;
        const secondFriendGems = secondFriend * secondFriendCapability;
        const thirdFriendGems = thirdFriend * thirdFriendCapability;

        const totalGems = firstFriendGems + secondFriendGems + thirdFriendGems;

        if (totalGems >= 2000) {
          return totalGems - 2000;
        }
        return totalGems;
    }
}

const friendsGem = gemsToDiamond(20,200,50);
console.log(friendsGem);