// Javascript array methods
let marks = [30, 19, 12, 21, 32, 34, 45];
let lang = ["Java", "Javascript", "Python", "Go", "Kotlin"];



let mix = marks.concat(lang);

console.log(`Marks array : ${marks}`);
console.log(`Lang array : ${lang}`);
console.log(`Mix array : ${mix}`);
 
// slice and splice method

let [favLang, secFabLang, thirdFabLang] = lang.slice(0, 3); // 0 included but 3 excluded

console.log(`Favorite language : ${favLang}`);
console.log(`Second Favorite language : ${secFabLang}`);
console.log(`Third Favorite language : ${thirdFabLang}`);

console.log(lang.slice(3)); // go and kotlin will be printed


// splice  method
lang.splice(1, 2, "Dart", "PHP", "C++");
console.log(lang);


// map method

let doubleMarks = marks.map((value) => value * 2);

console.log(marks);
console.log(doubleMarks);


// every method

let checkGreater20 = marks.every((v) => v > 20);
if (checkGreater20)
    console.log("Yes, every student get above 20 marks");
else
    console.log("No, every student dont get above 20 marks ");



// filter method
let greaterThan20 = marks.filter((value) => value > 20);
console.log(greaterThan20);


// fill mehtod
let a2 = [2, 7, 3, 5, 1, 9, 8];
console.log(`Before fill method ${a2}`);
a2.fill(10,1,4);
console.log(`After fill method ${a2}`);


// find mehtod
let a3 = [2, 7, 3, 5, 1, 9, 8];
let flag = a3.find((value) => value > 5);
console.log(flag);


// includes method
let a4 = [23, 32, 21, 12];
console.log(a4.includes(21));
console.log(a4.includes(20));

// sorting numerically

let age = [21, 15, 22, 17, 15, 8, 32, 6];
let age2 = [19, 21, 16, 13, 10, 18, 34, 30];

// By default, the sort() function sorts values as strings
age.sort((a, b) => a - b); // ascending order
console.log(age);

age2.sort((a, b) => b - a);
console.log(age2);

// sorting objects

let person = [
    {
        name: "Sourav",
        age : 22
    },
    {
        name: "Gourab",
        age : 17
    },
    {
        name: "Ratul",
        age : 23
    },
    {
        name: "Raja",
        age : 23
    },
    {
        name: "Rana",
        age : 19,
    }
];

console.log("Before sorting :", person);
person.sort( ( a, b ) => a.age - b.age );
console.log("After sorting :",person);