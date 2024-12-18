for(i=1;i<=5;i++){
    a=""
    for(j=5;j>=i;j--){
        a=a+" * "
    }
    for(k=1;k<=i-1;k++){
        a=a+"   "
    }
    for(t=1;t<=i-1;t++){
        a=a+"   "
    }
    for(n=5;n>=i;n--){
        a=a+" * "
    }
    console.log(a);
}
for(i=1;i<=5;i++){
    a=""
    for(j=1;j<=i;j++){
        a=a+" * "
    }
    for(k=3;k>=i-1;k--){
        a=a+"   "
    }
    for(t=3;t>=i-1;t--){
        a=a+"   "
    }
    for(n=1;n<=i;n++){
        a=a+" * "
    }
    console.log(a);
    
}