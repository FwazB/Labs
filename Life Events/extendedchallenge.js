let hours = prompt("What are your Hours?");
let wage = 10;
let overtimePay = 0;

let pay = hours * wage;
if (hours <= 40) {
  console.log(pay);
} else {
  let overtimeHours = hours - 40;
  let overtimePay = overtimeHours * (wage * 1.5);
  console.log(overtimePay);
}
let totalPay = pay + overtimePay;
console.log(totalPay);

let goal = 1000000 / totalPay;
console.log(goal);
