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

//The Reading List

let books=[
  {
  title: 'The Fault in our Stars',
  author: 'John Green',
  alreadyRead: true,
},
{
  title: 'Paper Towns',
  author: 'John Green',
  alreadyRead: false,
},
{
  title: 'Caught',
  author: 'Harlan Coben',
  alreadyRead: true,
}];

for (let i=0; i<books.length; i++){
  var book = books[i];
  var bookLog = book.title +' by ' + book.author;
}

if(books.alreadyRead){
 console.log( 'You already read ' + log);
}
else {
  console.log ( 'You still need to read' + log);
}
