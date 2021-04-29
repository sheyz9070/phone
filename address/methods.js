// 根据 ID 名 去获取对象
function $(str) {
    return document.getElementById(str);
}

var addrShow = $('addr');
var btn = document.getElementsByClassName('met1')[0];
var prov = $('prov');
var city = $('city');
var country = $('country');

// 保存 当前 所选的 省市区
var current = {
    prov:'',
    city:'',
    country:''
};

// 自动加载省份列表
(function showProv(){
    btn.disabled = true;
    var len = provice.length;
    for(var i = 0; i < len; i++){
        var provOption = document.createElement('option');
        provOption.innerText = provice[i]['name'];
        provOption.value = i;
        prov.appendChild(provOption);
    }
})();
// 根据所选的省份来显示城市的列表
function showCity(obj){
    // 获取option里每一个索引的value
    var val = obj.options[obj.selectedIndex].value;
    console.log(obj.selectedIndex)
    if(val != current.prov){
        current.prov = val;
        addr.value = '';
        btn.disabled = true;
    }
    if(val != null){
        city.length = 1; // 第二级 清空之前的内容只保留第一个默认的选项
        country.length = 1;
        var cityLen = provice[val]["city"].length;
        for(var j = 0; j < cityLen; j++){
            var cityOption = document.createElement('option');
            cityOption.innerText = provice[val]["city"][j].name;
            cityOption.value = j;
            city.appendChild(cityOption);
        }
    }
}

// 根据所选的城市来显示县区列表
function showCountry(obj){
    var val = obj.options[obj.selectedIndex].value;
    current.city = val;
    console.log(obj.selectedIndex)
    if(val != null){
        country.length = 1;  //第三级清空之前的选项只保留默认第一个
        var countryLen = provice[current.prov]["city"][val].districtAndCounty.length;
        if(countryLen == 0){
            addr.value = provice[current.prov].name+'-'+provice[current.prov]["city"][current.city].name;
            return;
        }
        for(var n = 0;n < countryLen; n++){
            var countryOption = document.createElement('option');
            countryOption.innerText = provice[current.prov]["city"][val].districtAndCounty[n];
            countryOption.value = n;
            country.appendChild(countryOption);
        }
    } 
}

// 选择县区之后的处理函数
function selecCountry(obj){
    current.country = obj.options[obj.selectedIndex].value;
    console.log(obj.selectedIndex);
    if((current.city != null) && (current.country != null)){
        btn.disabled = false;
    }  
}

function showAddr(){
    addr.value = provice[current.prov].name + '-' + provice[current.prov]["city"][current.city].name + '-' + provice[current.prov]["city"][current.city].districtAndCounty[current.country];
    console.log(addr.value)
}

 


