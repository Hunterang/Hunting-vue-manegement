let json = {
  list: {
    son: [1]
  }
}

let update = json  //现在属于引用json阶段
console.log(update);
update.son = 1
//现在改变了json
update = update['list'].son //现在属于赋值阶段，update成了新的对象，或者值
console.log(update);

var a = {}
var b ={}

a !== b

var a = {
  a: {}
}
var b =  a

a === b

b = a.a

b!==a


usedPath['test'] = 'wtf'
