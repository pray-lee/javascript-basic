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
// 总结：相等性检查和不同类型的比较才会类型转换 *****************************
console.log(null >= 0)
console.log(undefined == null)
console.log('2' > '12')

// 逻辑运算符
//或运算符返回第一个真值, 如果全是假的，返回最后一个值
console.log(1 || 0) // 1
console.log(null || 1) // 1
console.log(undefined || null || 0) // 0
//与运算符返回第一个假值,如果全为真值，则返回最后一个值
console.log(1 && 0) // 0
console.log( 1 && 2 && null && 3) // null
console.log(1 && 2 && 3) // 3
// 与运算符优先级高于或运算符

// ?? 空值合并运算符
// 如果第一个参数不是null/undefined ,返回第一个参数，否则返回第二个