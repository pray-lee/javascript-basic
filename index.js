"use strict"
// console.log(Number(undefined)) //NaN
// console.log(Number(null)) // 0
// console.log(Number('   123    ')) //123
// console.log(+true) // 1
// console.log(+'') // 0
//
// let a = 1;
// let b = 2;
// let c = 3 - (a = b + 1)  // (a = b + 1) 这里a = 3; 然后把a的值返回出来和前面的3 - 进行运算
// console.log(c, 'c')

// let counter = 1
// let a = counter++
// console.log(a)

// 值比较
// 相等性检查不会进行任何类型转换,有独立的比较规则 ***************************
// 不同类型的值才会转换成number, 如果类型一致不转换 ***************************
console.log(null >= 0)
console.log(undefined == null)
console.log('2' > '12')