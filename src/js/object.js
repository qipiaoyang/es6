
const foo = "bar";// 1.属性简写
const baz = { foo };
console.log(baz); // {foo: "bar"}

// 2.字面量映射

const propKey = "props";
let propObj = {
    [propKey] : "这是通过字面量映射的属性值"
};
console.log(propObj);

// 3.方法的name属性

const functionName = {
    fName() {
        return {}
    }
};
console.log(functionName.fName.name);

// 4.属性的可枚举性和遍历
let describrObj = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(describrObj, 'foo'));

// configurable: true   是否可修改
// enumerable: true     是否可枚举
// value: "bar"         属性的值
// writable: true       是否可写

function inherit() {
    this.age = 123;
}

let consoleObj = new inherit(),
    _arr = [];
consoleObj.sex = "nv";
Object.defineProperties(consoleObj, {
    "unenumerable": {
        value : "不可枚举",
        enumerable: false
    },
    'numerable': {
        value: "可枚举的",
        enumerable: true,
    }
});
for(let k in consoleObj ) {
    _arr.push(k)
}
console.log(consoleObj);
console.log(_arr    , "for ... in遍历结果");
console.log(Object.keys(consoleObj), "通过Object.keys()遍历的结果");

