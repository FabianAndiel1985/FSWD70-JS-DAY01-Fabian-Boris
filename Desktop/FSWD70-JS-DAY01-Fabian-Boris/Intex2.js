var fruit = ["apple ", "banana ", "kiwi ", "orange"]
var animals =["monkey", 'horse', 'dog','cat']
console.log(fruit.slice(0, 4 ));
console.log(fruit.slice(0, 3 ));

animals.unshift("monkey");
animals.unshift("horse");
animals.unshift("dog");
console.log(animals.slice(0,3));
animals.unshift("cat");
console.log(animals.slice(0,4));