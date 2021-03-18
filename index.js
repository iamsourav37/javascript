

let arr = ["Sourav", 'Raja', 'Ratul', 'Amartya', 'Rocket'];

for (const item of arr) {
    console.log(item);
}

console.log(typeof(arr));


arr.forEach(function (item, index){
    console.log(index+". Value : "+ item);
});