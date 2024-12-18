// 1-Finds the longest word within the array. (Score 3) Examples const words = ['apple', 'banana', 'cherry', 'blueberry']; 
var words = ['apple', 'banana', 'cherry', 'blueberry'];
var a =""; 
for (i = 0; i < words.length; i++){
   
    if (a.length < words[i].length) {
        a = words[i];
    }
}
console.log(a);  


