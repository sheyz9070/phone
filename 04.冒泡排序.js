var arr = [3,1,7,6,2,5,4]
//优化1: 7个数据，排6次，最后一次只剩最小的一个，可以不用排
for(let j = 0; j<arr.length - 1;j++){
    //优化2: 每排一次，最后的排好的不用再比较，减掉排的次数
    for(let i = 0; i < arr.length - 1 - j; i++){
        if(arr[i] > arr[i + 1]){
            let tmp = arr[i]
            arr[i] = arr[i+1]
            arr[i + 1] = tmp
        }
    }
}
console.log(arr)