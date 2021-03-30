// Javascript array methods
let marks = [30, 19, 12, 21, 32, 34, 45];
let lang = ["Java", "Javascript", "Python", "Go", "Kotlin"];



let mix = marks.concat(lang);

console.log(`Marks array : ${marks}`);
console.log(`Lang array : ${lang}`);
console.log(`Mix array : ${mix}`);

// slice and splice

let [favLang, secFabLang, thirdFabLang] = lang.slice(0, 3); // 0 included but 3 excluded

console.log(`Favorite language : ${favLang}`);
console.log(`Second Favorite language : ${secFabLang}`);
console.log(`Third Favorite language : ${thirdFabLang}`);

console.log(lang.slice(3)); // go and kotlin will be printed


// splice 
lang.splice(1, 2, "Dart", "PHP", "C++");
console.log(lang);
