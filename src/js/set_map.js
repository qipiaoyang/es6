const s = new Set();
[2,3,3,4,5,4].forEach((x) => {
    s.add(x);
})
s.add(7).add(5);// {2,3,4,5,7} 往Set数据结构里面添加属性
console.log(s); //{2,3,4,5} Set数据结构，但是有size以及length属性
console.log(Array.from(s));//将Set数据结构转化为数组
console.log(s.has(7));// true 判断Set数据结构里面是否存在该元素


let a = 5;
if(a == 5) {
    console.log(123)
}