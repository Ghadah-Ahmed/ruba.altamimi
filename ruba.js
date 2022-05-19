var hand = 5;
var colors = ['red', 'green', 'yellow', 'black', 'blue', 'white', 'pink']
var answer = document.body.getElementsByTagName('h1')[0]
var ask = document.body.getElementsByTagName('button')[0]


var i =-1;
function myFunction() {
    i++

    if (i=== 6){i=0}
    answer.style.color= colors[i]
}