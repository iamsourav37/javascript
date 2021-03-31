console.log( "Hello World" );

new Promise( function ( resolve, reject )
{
    setTimeout( () =>
    {
        resolve( "this is resolved" );
        // reject( "this is rejected" );
    }, 4000 );
} ).then( ( resolve ) =>
{
    console.log( "In then block" );
    console.log( resolve );
} ).catch( error =>
{
    console.log( "In catch block" );
    console.log( error );
} );