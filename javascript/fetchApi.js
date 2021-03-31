console.log("Fetch API example");

const content = document.getElementById( "content" );
const img = document.getElementById( "img" );

function getData ()
{
    // let url = "../data/myapi.txt";
    let url = "https://api.github.com/users/10";
    fetch( url ).then( ( response ) =>
    {
        return response.text();
    } ).then( ( data ) =>
    {
        let obj = JSON.parse( data );
        console.log( obj['name']);
        content.innerHTML = obj[ 'name' ];
        console.log(obj[ "avatar_url" ] );
        img.setAttribute( "src", obj[ "avatar_url" ] );
        
    } );
    
}

getData();