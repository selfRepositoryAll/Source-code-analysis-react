
var fn = async function () {
    console.log('222')
    await 1
    return 'xxxxxxx'
}
// return 只是返回值
//fn() 这样执行 肯定 没有promise 看来是async对这个函数做了
console.dir(fn().then(function (data) {
    console.log(data)
}))
