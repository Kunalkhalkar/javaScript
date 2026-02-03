/*Q25. Write a js program to Check Number Is Armstrong Number or Not.
Example : A number is thought of as an Armstrong number if the sum of its own digits raised to the power number of digits gives the number itself.
      For example, 0, 1, 153, 370, 371, 407 are three-digit Armstrong numbers and, 1634, 8208, 9474 are four-digit Armstrong numbers and there are many more.
*/
let num = 1634;
let temp = num;

let count = 0;
while (temp != 0) {
  temp = Number.parseInt(temp / 10);
  count++;
}
temp = num;

let sum = 0;
while (temp != 0) {
  let digit = temp % 10;
  let tCount = count;
  sum += Math.pow(digit, count);
  temp = Number.parseInt(temp / 10);
}

if (sum == num) console.log(num," Number is  ArmStrong");
else console.log(num , " Number is not Armstrong");

