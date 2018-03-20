//The Recipe Card

let recipe = {
  title: 'Rice',
  servings: 4,
  ingredients:  ['2 cups of rice', '4 cups water', '2 tbsp of oil', 'pinch of salt'],
  
};

console.log(recipe.title);
console.log('Serves ' + recipe.servings);
console.log('ingredients: ');
for( var i = 0; i<recipe.ingredients.length; i++){
  console.log(recipe.ingredients[i]);
}

//The Reading List... Displays what you have already read and what you are yet to read from your library.

let library = [
  {
  title: 'The Fault in our Stars',
  author: 'John Green',
  alreadyRead: true
},
{
  title: 'Paper Towns',
  author: 'John Green',
  alreadyRead: false
},
{
  title: 'Caught',
  author: 'Harlan Coben',
  alreadyRead: true
}];

for (var i = 0; i < library.length; i++){
  var lib = library[i];
  var libraryLog = lib.title +' by ' + lib.author;
}

if(lib.alreadyRead){
 console.log( 'You already read ' +  libraryLog);
}
else {
  console.log ( 'You still need to read' + libraryLog);
}
