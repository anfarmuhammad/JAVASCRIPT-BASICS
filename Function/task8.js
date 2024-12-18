// Write a function to check if an input string is a palindrome?
function palindrome(){
  var x="madam";
  var y="";
  for(i=x.length-1;i>=0;i--){
    y+=x[i];
  }
  if(x==y){
    console.log(x+ " is palidrome string");
    
  }
  else{
    console.log(x+ " is not  palidrome string");
  }
}
palindrome()
