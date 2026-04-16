// 1-mashq
let arr = [1,2,3,4];
let mid = arr.length/2;
console.log(arr.slice(0,mid), arr.slice(mid));
// 2-mashq
let s = "dcba";
console.log(s.split("").sort().join(""));
// 3-mashq
let arr = [3,8,2,7];
let evens = arr.filter(x=>x%2===0);
console.log(Math.min(...evens));
// 4-mashq
let arr = [1,2,3];
console.log(arr.join(","));
// 5-mashq
let s = "abc1";
console.log(/\d/.test(s));
