intReverse = (num) => parseInt(("" + num).split("").reverse().join("")) * Math.sign(num);

console.log(intReverse(-234));
