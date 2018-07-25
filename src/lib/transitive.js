import path from 'path'; // a transitive dependency

export default function transitive() {
    console.log( 'transitive' );
    return path.join( __dirname, 'transitive' );
}