//Q1.Write a JavaScript function to check whether an `input` is an array or not

var isArray = (input)=> {

    let array=[];
   if (toString.call(input) === toString.call(array))
     return true;
   return false;   
     };

  console.log(isArray('ritika'));
  console.log(isArray([1, 2, 4, 0]));
  

//Q2.Write a JavaScript function to clone an array

var arrayClone = (array1)=> {
   return array1.slice(0);
      };

      
  console.log(arrayClone([1, 2, 4, 0]));
  console.log(arrayClone([1, 2, [4, 0]]));
  
  
  //Q3.Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

  var first =  (arr , n)=>{
        if (arr == null) 
        return void 0;
      if (n == null) 
        return arr[0];
      if (n < 0)
        return [];
      return arr.slice(0, n);
    };
    console.log(first([7, 9, 0, -2]));
    console.log(first([],3));
    console.log(first([7, 9, 0, -2],3));
    console.log(first([7, 9, 0, -2],6));
    console.log(first([7, 9, 0, -2],-3));
    
  //Q4.Write a simple JavaScript program to join all elements of the following array into a string.

  myColor = ["Red", "Green", "White", "Black"];
  myColor = myColor.join();
  console.log(myColor);
  
  //Q5. Write a JavaScript program to find the most frequent item of an array

  var arr=[3, 'r', 'y', 'r', 2, 3, 'r', 2, 4, 9, 3];
  var mostfrequent = 1;
  var most = 0;
  var item;
  for (var i=0; i<arr.length; i++)
  {
          for (var j=i; j<arr.length; j++)
          {
                  if (arr[i] == arr[j])
                   most++;
                  if (mostfrequent<most)
                  {
                    mostfrequent=most; 
                    item = arr[i];
                  }
          }
          most=0;
  }
  console.log(item+" ( " +mostfrequent +" times ) ");     
 
