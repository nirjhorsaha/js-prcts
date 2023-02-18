/**
 * Problem Statement
 * 1. show output from 1-50
 * 2. if number is divisible by 3 then instead of number print - foo
 * 3. if number is divisible by 5 then instead of number print - bar
 * 4. if number is divisible by 3 and 5  then instead of number print - foo-bar
 */

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("foo-bar");
    } else if (i % 3 === 0) {
        console.log("foo");
    } else if (i % 5 === 0) {
        console.log("bar");
    } else {
        console.log(i);
    }
}
