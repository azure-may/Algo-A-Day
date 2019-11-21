// Get all permutations of a string
// Treats all characters as unique
function getPermutations(string){
  let perms = [];
  if( string.length===1 ){
      perms.push( string );
      return perms;
  }
  for( let i=0; i<string.length; i++ ){
      let firstChar = string[i];
      let restChars = string.substring( 0, i )+string.substring( i+1 );
      let subPerms = getPermutations( restChars );
      for( let j=0; j<subPerms.length; j++ ){
          perms.push( firstChar+subPerms[j] )
      }
  }
  return perms;
}