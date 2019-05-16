

 // var firstArray = ["apple","banana","kiwi"];
 // console.log(firstArray);
 // firstArray.push("orange");
 // console.log(firstArray);
 // firstArray.pop();
 // console.log(firstArray);

 // var animals = ["monkey", "horse", "dog"];
 // var sortedAnimals = animals.sort();
 // console.log(sortedAnimals);
 // sortedAnimals.unshift("cat");
 // console.log(sortedAnimals);

var string = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";

var splittedString = new Array();
splittedString = string.split("/");
console.log(splittedString);



for (i=0;i<splittedString.length;i++) {
	console.log(splittedString[i]);
};