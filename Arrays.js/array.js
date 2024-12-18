// ["apple","orange","kiwi","berry"]
var fruits = ["appale", "orange", "kiwi", "berry"]
for (i = 0; i < fruits.length; i++) {
    var x = fruits[i];
    for (j = 0; j < x.length; j++) {
        if (x[j] == 'a') {
            console.log(x);
            break
        }
    }
}

