var hand = 5;
var colors = ['red', 'green', 'yellow', 'black', 'blue', 'white', 'pink']
var answer = document.body.getElementsByTagName('h1')[0]
var ask = document.body.getElementsByTagName('button')[0]


function myFunction() {
    answer.style.color= colors[Math.floor(Math.random() * 10)]
}