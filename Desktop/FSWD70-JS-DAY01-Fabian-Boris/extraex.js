var text = "Hey there, i am a javascript developer, and i live in vienna";
var newtext = text.slice(11,38);
var textarray = new Array();
textarray = newtext.split(" ");
textarray.shift();
textarray.unshift("I");
console.log(textarray);	