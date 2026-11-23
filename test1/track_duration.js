//Моё решение
const totalSeconds = 215;

// BEGIN (write your solution here)
let minute = Math.floor(totalSeconds / 60)
let second = String(totalSeconds % 60).padStart(2, '0')
console.log(`${minute}:${second}`)
// END

//Решение учителя
const totalSeconds = 215;

// BEGIN
const minutes = Math.floor(totalSeconds / 60);
const seconds = totalSeconds % 60;
console.log(`${minutes}:${String(seconds).padStart(2, '0')}`);
// END