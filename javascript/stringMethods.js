// Javascript String mehtods

let fav = "Python";

console.log( fav.indexOf( "h" ) );

console.log( fav.indexOf( "n0" ) );
console.log( fav.search( "n0" ) );

console.log( fav.slice( 1, 4 ) );
console.log( fav.slice( 12, 23 ) );

console.log( fav.substring( 1, 4 ) ); // substring() cannot accept negative indexes

let greetings = "Hello, Sourav";

// greetings = greetings.replace( /sourav/i, "World" ); // regular expression
greetings = greetings.replace( "Sourav", "World" );
// The replace() method does not change the string it is called on. It returns a new string
console.log(greetings);

greetings = greetings.toUpperCase();
console.log( greetings );

greetings = greetings.toLowerCase();
console.log(greetings);


let msg = "  hello world, how are you?   ";
msg = msg.trim();
console.log(msg);