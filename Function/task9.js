function prime(n){
    var primeis= true;
    for(i=2;i<n;i++){
        if(n%i==0){
            primeis=false;
        }
    }
    if(primeis==false){
        console.log(n+" is not prime number");
    }
    else{
        console.log(n+" is prime number");
    }
}
prime(4)








