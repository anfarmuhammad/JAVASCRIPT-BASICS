for(i=1;i<=5;i++){
    a=""
    for(j=1;j<=5;j++){
       if(i==1||i==5||j==1||j==5){
          a=a+" * "
       }
       else{
        a=a+"   "
       }
    }
     console.log(a);
}