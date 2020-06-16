// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function capitalize(str) {
  var s = str.split(/\s+/); //以空白为分界线
  for (var i = 0; i < s.length; i++) {
    s[i] = s[i].substring(0,1).toUpperCase() + s[i].substring(1)
  }
  return s.join(' ')
}
console.log(capitalize(sentence));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1));