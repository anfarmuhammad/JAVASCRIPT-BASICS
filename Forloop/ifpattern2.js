for(i=1;i<=5;i++){
    a=""
    for(j=1;j<=5;j++){
       if(i==1||i==5||j==1||j==5||j==2&&i==2||j==3&&i==3||j==4&&i==4||i==4&&j==4){
        a=a+" * "
       }
       else{
        a=a+"   " 
       }
    }
    console.log(a);
    
}