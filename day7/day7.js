// Q.1  Write a JavaScript program to list the properties of a JavaScript object.

var student={name :"Ritika Singh",sclass:"btech",rollno:122}

for (let prop in student) {
 console.log(prop);
}

//Q .2   Write a JavaScript program to delete the rollno property from the following object. 
//Also print the object before or after deleting the property.

console.log('Original: ');
for (let prop in student) {
 console.log(prop);
}
delete student['sclass'];
console.log('\nAfter deleting sclass : ');
for (var prop in student) {
 console.log(prop);
}


// Q 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : 

var length=0;
for (var prop in student) {
 length+=1;
}
console.log(length);

// Q 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var student= [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 
for (var prop in student) {
  for(var j in student[prop])
  { 
    if(j=='readingStatus')
    {
      let value=student[prop][j];
      console.log(value);
    }
  }
}

// Q.5.  Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

var student={
    pi : 22/7,
    r :  5,
    h :  99,
 }
 var product=1;
 for (var prop in student) {
   product*=student[prop];
 }
 product*=2;
 console.log(product.toFixed(4));
 
//Q 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]
var library = [
    { title: 'The Road Ahead', 
    author: 'Bill Gates',
     libraryID: 1254 },
    { title: 'Walter Isaacson', 
    author: 'Steve Jobs', 
    libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', 
    author: 'Suzanne Collins', 
    libraryID: 3245 
   }]; 

   library.sort((a,b) =>{
       return b.libraryID-a.libraryID;
   }
   );
   console.log(library);
