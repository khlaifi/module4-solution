
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
var firstLetter ;
var name ; 

for (var i = 0; i < names.length ; i++) {
 
  firstLetter = names[i].charAt(0);                     
  firstLetter = firstLetter.toLowerCase(firstLetter);   // or simply firstLetter = names[i][0];

  name        = names[i];


  if (firstLetter == 'j'  || firstLetter == 'J')        // if (firstLetter == 'j'  ) 
  {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
  