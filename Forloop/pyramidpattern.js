// pyramid
for(i=1;i<=5;i++){
    a=""
    for(j=5;j>=i;j--){
        a=a+"   "
    }
    for(k=1;k<=i;k++){
        a=a+" * "
    }
    for(n=1;n<=i-1;n++){
        a=a+" * "
    }
     console.log(a);
}

