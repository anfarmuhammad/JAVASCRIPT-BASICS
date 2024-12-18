for(i=1;i<=4;i++){
    b=""
    for(j=1;j<=i;j++){
        if(i==1){
            b=b+"*"
        }
        else if(i==2){
            b=b+"$"
        }
        else if(i==3){
            b=b+"%"
        }
        else{
            b=b+"/"
        }
    }
    console.log(b);
}