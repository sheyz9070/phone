var name = "jack"
var obj = {
    name:"张三",
    getName:function (){
        function fn(){
            return this.name;
        }
        return fn();
    }
}
console.log(obj.getName()) //jack
