// 1.Factorial of a number

let num = parseInt(prompt("Enter a number:"));
if (num < 0) {
    console.log("sorry,you have no factorial number");
}
else if (num === 0) {
    console.log(`${num} is factorial ${value}`);
}
else {
    let value = 1
    for (let i = 1; i <= num; i++) {
        value *= i;
        // console.log(`${num} is factorial ${value}`);
    }
    console.log(`${num} is factorial ${value}`);
}