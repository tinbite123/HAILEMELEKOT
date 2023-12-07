
// How to link from HTML

function abebe() {
    alert("Hello Abe");
}

abebe() //


var a = 9;

if ( 1 == 1 ) {
    console.log("Ejihin ansa");
}

/*
[1, 2, 3].push(4) // [1, 2, 3, 4]
[1, 2, 3].pop() // [1, 2]
[1, 2, 3].shift() // [2, 3]
[1, 2, 3].unshift(0) // [0, 1, 2, 3, 4]
['a', 'b'].concat('c') // ['a', 'b', 'c']
['a', 'b', 'c'].concat('c') // ['a', 'b', 'c']
['a', 'b', 'c'].join('-') // [a - b - c]
['a', 'b', 'c'].slice('1') // ['a', 'b']
['a', 'b', 'c'].indexOf('b') // 1
;['a', 'b', 'c'].includes('c') // true
[3, 5, 6, 8].find((n) => n % 2 === 0) // 6
[2, 4, 3, 5].findIndex((n) => n % 2 !== 0) // 12
[3, 4, 8, 6].map((n) => n * 2 !== 0) // [6, 8, 16, 12]
[1, 4, 7, 8].filter((n) => n % 2 === 0) //  [4, 8]
[3, 5, 6, 8].reduce((acc, cur) => acc % cur === 0) // 16
[2, 3, 4, 5].every((x) => x % 6) // true
[3, 5, 6, 8].some((n) => n > 6) // true
[1, 2, 3, 4].reverse() // [4, 3, 2, 1]
[3, 5, 7, 8].at(-2) // 7
*/



/******** These CODE is VERY IMPORTANT!!!!!! ( With switch) ********/ 

// JS Nuggets: Switch Statments
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
            break;
    case 1: 
        day = "Monday"
            break;
    case 2:
        day = "Tuesday"
            break;    
    case 3:
        day = "Wednesday";
            break;
    case 4: 
        day = "Thurdesday"
            break;
    case 5:
        day = "Friday"
            break;
    case 6:
        day = "Saterday";
            break;
}
console.log (day)


var Animal = 'Cow';
switch (Animal) {
    case ('Cow'):
    case ('Giraffe'):
    case ('Dog'):
    case ('Pig'):
        console.log("This animal will go on Noah\'s Ark.");
        break;
    case 'Spoon':
        console.log("This spoon is not a animal!");
        break;
    case 'Dinosaur':
    defoult
        console.log('This animal will not be on the Ark.');
}


function detectWord2(a) {
    var hiddenWord = "";
    for (i = 0; i < a.length; i++) {
        var singelLetter = a.charAt(i);
        if (singelLetter == singelLetter.toLowerCase()) {
            hiddenWord = hiddenWord + singelLetter;
        }
    }
    return hiddenWord;
}

var hiddenWord = detectWord2("https://www.youtube.com/watch?v=GGEQlsNCNqY");
console.log(hiddenWord);


function isMagicArray(a) {
    var sum = 0;
    for (i = 0; i < a.length; i++) {
        var num = a[i];
        if (num == 2) {
            sum = sum + num;
        }
        var isPrime = true;
        if (num > 2) {
            for (j = 2; j < num / 2 + 1; j++) {
                if (num % j == 0) {
                    isPrime = false;
                }
            }
            if (isPrime) {
                sum = sum + num;
            }
        }
    }
    if (a[0] == sum) {
        return 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1;
    } else {
        return 0;
    }
}

console.log(isMagicArray([10, 5, 5]))



// First name, Last name and Email adresse

let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
$("#registration-form").on("submit", function(e){
    e.preventDefault()
    let num1 = $("input[name='first-name']").val()
    let num2 = $("input[name='last-name']").val()
    let num3 = $("input[name='email']").val()
    if(num1 == "") {
        console.log($(this).prepend("Please enter first name "))
    }
    else if(num2 == "") {
        console.log($(this).prepend("Please enter last name "))
    }
    else if(num3 == "") {
        console.log($(this).prepend("Please enter email adresse "))
    }
    else if (!emailReg.test(num3)) {
        console.log($(this).prepend("Please enter valied email adresse"))
    }
    else {
        $(this).hide()
        alert("You are registerd")
    }
})
