console.log("hello world");
var a;
var b = 2;
console.log(a);
a = 7;
b = a;
console.log(a);

var remainder;
remainder = 11 % 3;
console.log(remainder);
remainder += 12;
console.log(remainder);
var quotationMark = `'I am using single quote to avoid using "escape character"'`;
stringLength = quotationMark.length;
console.log(quotationMark);
console.log(stringLength);
indexes = quotationMark[0];
console.log(indexes);

var myArray = [10, 20, 30];
//myArray.push=([40,50]);
myArray.pop();  //removes last element
myArray.shift();    //removes first element
myArray.unshift("Value");
var myData = myArray;
console.log(myData);
function myFunction() {
    console.log("Hello World\n");
}
myFunction();
myFunction();

function subtractFunction(a, b) {
    console.log(a - b);
}
subtractFunction(10, 2);
subtractFunction(12, 5);

//function fun() {
//globalVariable="global variable";   //if we don't use the var keyword in fuction it will be a global variable
//}
//console.log(globalVariable);

//changing value of a variable in function with local scope
var outerWear = "Shirt";
function myOutfit() {
    outerWear = "Jacket";
    return outerWear;
}
console.log(myOutfit());

function checkTrueFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(checkTrueFalse(true));

function isEqualToTen(val1, val2) {
    if (val1 == val2) {
        return "Both values are equal";
    }
    return "Both values are NOT equal";
}
console.log(isEqualToTen(10, "10"));

//strict equal using three equal signs. This equal does not convert
//the string to number whereas double equal converts it
function strictEqualToTen(val1, val2) {
    if (val1 === val2) {
        return "Both values are equal";
    }
    return "Both values are NOT equal";
}
console.log(strictEqualToTen(10, "10"));

//switch case statement
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamme";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "default";
            break;
    }
    return answer;
}
console.log(caseInSwitch(2));

function sequentialSizes(val) {
    switch (val) {
        case 1:
        case 2:
        case 3:
            val = "Low";
            break;
        case 4:
        case 5:
        case 6:
            val = "Medium";
            break;
        case 7:
        case 8:
        case 9:
            val = "High";
            break;
        default:
            val = "Default Answer";
            break;
    }
    return val;
}
console.log(sequentialSizes(5));

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats",
    "the element": "water"
};
function checkObj(checkProp) {
    if (testObj.hasOwnProperty(checkProp)) {
        return testObj[checkProp];
    }
    else {
        return "Not found";
    }
}
var testObjCopy = JSON.parse(JSON.stringify(testObj));
console.log(testObjCopy);
console.log(checkObj("hat"));
testObj["the element"] = "fire";
delete testObj.shoes;
console.log(testObj);
var elementValue = testObj["the element"];
var shirtValue = testObj.shirt;
console.log(testObj.hat);
console.log(shirtValue);
console.log(elementValue);

//while loop
var myArrayLoop = [];
i = 0;
do {
    myArrayLoop.push("Hello " + i + " time");
    i++;
} while (i < 10)
console.log(myArrayLoop);

for (let i = 0; i < myArrayLoop.length; i++) {
    const element = myArrayLoop[i];
    console.log(element);
}
console.log(Math.floor(Math.random() * 20))

//ternery operator
function checkZero(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkZero(0));
console.log(checkZero(1));
console.log(checkZero(-1));

const myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

