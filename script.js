// fonction with console in
function name (firstname = 'Omar', lastname = 'Hamadou'){
    console.log(`hello ${firstname} ${lastname} welcome`);
}

name();

// function with console after
function num(number1, number2) {
    return number1 + number2;
}

let number = num(2, 3);

console.log(number);

function moi(lui ='lui c\'est monsieur lui', toi='toi ton nom c\'est toi') {
    return lui + ' ' + toi;
}

let moilui = moi();

console.log(moilui);

function one(one1, two2){
    return one1 * two2
}

let three = one(4, 5);

console.log(three);



//function expression

const sum = function (num1, num2){
    return num1 + num2;
}

console.log(sum(3, 4));
console.log(sum(6, 44));
console.log(sum(4, 22));
console.log(sum(55, 55));


//IIFE function

(function(language){
    console.log('learning ' + language)
})('javascript');



//property methodes

const music = {
    play: function(id) {
        console.log(`play music by ${id}`)
    },

    pause: function(id) {
        console.log('pause...')
    }
};

music.play(30);
music.pause();

music.remove = function (id) {
    console.log(`remove music by ${id}`)
};

music.remove(22);



//The date

const today = new Date();

let output;

output = today.getDay();
output = today.getHours();
output = today.getMinutes();
output = today.getSeconds();
output = today.getDate();
output = today.getFullYear();


console.log(output);



//if else statement

const numero = 100;

if (numero == 100) {
    console.log('yes')
} else{
    console.log('no! this is not the same')
}


let currentTime = 25;

if(currentTime > 0 &&  currentTime <= 12) {
    console.log('Good Morning!')
}else if(currentTime >12 && currentTime <= 18){
    console.log('good afternoon!')
}else if(currentTime >18 && currentTime <= 24){
    console.log('good night!')
} else {
    console.log('INVALID!')
}

//ternary operator

const ter = true;

console.log(ter === false ? 'you can not log' : 'you can log now');



//the swicth methode

const cars = ['mustang', 'camaro', 'chevrolet'];

let car;
const selected = 2;

switch(selected){
    case 0:
        car = cars[0];
        break;
    case 1:
        car = cars[1];
        break;
    case 2:
        car = cars[2];
        break;
}

console.log(`your selected car is ${car}`);



//loops

// for(let i = 0; i<10; i++){
//     console.log(`Number : ${i}`);
// };

for (let i = 0; i<10; i++){
    if(i==3){
        console.log('this is three')
        continue;
    }
    console.log(`number : ${i}`);
}

for (let i = 0; i<13; i++){
    if(i % 2 == 0){ //les nombres paires
        console.log('this is odd')
    } else{
        console.log('this is even')
    }
}

//loop witth arrays

const shopingCart = ['product 1', 'product 2', 'product 3'];

for (let i = 0; i < shopingCart.length; i++){
    console.log(`product : ${shopingCart[i]}`)
};



//  while loop

const shop = ['product 4', 'product 5', 'product 6', 'product 7'];

let i = 0;

while (i < shop.length){
    console.log(`product II : ${shop[i]}`);
    i++;
}

// forEach loop

let todo = ['one', 'two', 'three'];

todo.forEach(function(assigment, index){
    console.log(`${index} : ${assigment}`);
})



// th map loop

const producMap = [
    {id: 1, product: 'milk'},
    {id: 2, product: 'bottle'},
    {id: 3, product: 'flour'}
];

const newPro = producMap.map(function(oie){
    return oie.product;
})

console.log(newPro);



// iterators in es6

let nex = {
    outil: 'mart',
    mode: 'ame',
    or: 'quart'
}

for(let key in nex){
    console.log(`${key} : ${nex[key]}`)
};


// the windows object

let width, height;

width = window.innerWidth;
height = window.innerHeight;


if(width > 1000){
    document.body.style.backgroundColor = 'red';
} else if(width > 500){
    document.body.style.backgroundColor = 'green';
} else{
    document.body.style.backgroundColor = 'gray';
};

console.log(width);
console.log(height);
