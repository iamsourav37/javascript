console.log("Fetch API example");

const content = document.getElementById( "content" );
const img = document.getElementById( "img" );
const p_url = document.getElementById( "p_url" );
const profile_url = document.getElementById( "profile_url" );


function getData ()
{
    // let url = "../data/myapi.txt";
    let url = "https://api.github.com/users";
    fetch( url ).then( ( response ) =>
    {
        return response.text();
    } ).then( ( data ) =>
    {
        let obj = JSON.parse( data );
       
        console.log( obj[ 0 ][ 'url' ] );
        content.innerHTML = `Name : ${obj[ 0 ][ 'login' ]}`;
        img.setAttribute( 'src', obj[ 0 ][ 'avatar_url' ] );
        profile_url.setAttribute( 'href', `${ obj[ 0 ][ 'html_url' ] }` );
        p_url.innerHTML = "Profile URL"
    } );
    
}

getData();