    // 题目：请实现一个 protectPhone 函数，可以替换手机号字符串中间四位为 ****:
    // '185****1234'
    function protectPhone(phone) {
        phone =  phone.substr(0,3) + '****' + phone.substr(7)
        console.log(phone)
    }
    protectPhone('18512341234');