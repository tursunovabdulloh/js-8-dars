// 4-misol
let arr = [1, 2, 3, 4, 5];
let newArr = arr.sort((a, b) => {
  return b - a;
});
console.log(newArr);

// ==========================================================
//                  string metdlari
//
//==========================================================
// charatAt() - index beramiz shunda joylashgan harf ni chiqarib beradi

// console.log("text".replace("t", "i")); - shunda birinchi t harfi o'zgaradi agar replaceAll deb qoysak barcha t lar

// console.log("text".split("t")); - split stringni array qilib beradi
// function sonlar(son1, son2, arr) {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element > son1 && element < son2) {
//       newArr.push(element);
//     }
//   });
//   console.log(newArr);
// }
