for(i=1;i<=5;i++){
    var a = ""

    for(j=5;j>=i;j--){
        var b = "   "
        a = a+b
    }
    for(k=1;k<=i;k++){
        var c = " * "
        a = a+c
    }
    for(l=1;l<=(i-1);l++){
        var d = " * "
        a = a+d
    }
   
    console.log(a);
    
}
for(i=1;i<=5;i++){
    var a = ""

    for(j=1;j<=i;j++){
        var b = "   "
        a = a+b
    }
    for(k=4;k>=i;k--){
        var c = " * "
        a = a+c
    }
    for(l=5;l>=i;l--){
        var d = " * "
        a = a+d
    } 

    console.log(a)
}