for(i=1;i<=4;i++){
    var a = " "
    for(j=1;j<=i;j++){
        a = a+" * "
    }
    for(k=3;k>=i;k--){
        a = a+"   "
    }
    for(t=3;t>=i;t--){
        a = a+"   "
    }
    for(n=1;n<=i;n++){
        a = a+" * "
    }

    console.log(a)
}
for(i=1;i<=4;i++){
    var a = " "
    for(j=4;j>=i;j--){
        a = a+" * "
    }
    for(k=1;k<=i-1;k++){
        a = a+"   "
    }
    for(t=1;t<=i-1;t++){
        a = a+"   "
    }
    for(n=4;n>=i;n--){
        a = a+" * "
    }

    console.log(a)
}