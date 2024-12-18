for(i=1;i<=4;i++){
    b=""
    for(j=1;j<=3;j++){
        if(i%2==0){
            b=b+"$ "
        }
        else{
            b=b+"* "
        }
    }
    console.log(b);
}