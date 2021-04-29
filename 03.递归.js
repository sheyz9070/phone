//1-100 求和
function add(n){
    if(n=100){
        return 
    }else{
        return n + add(n+1)
    }
}
console.log(add(1))