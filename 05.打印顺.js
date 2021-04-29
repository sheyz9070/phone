console.log(1)  //同步 1
setTimeout(()=>console.log(2),0) // 5
new Promise(resolve => {
    console.log(3)  //同步 2
    resolve()
}).then(()=>console.log(4))  //.then是异步的 4
console.log(5)  // 同步 3
// 1 3 5 4 2
