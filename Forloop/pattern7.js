var a=5
for (var i=1;i<=5;i++){
    var y=" "
    for(j=1;j<=i;j++){
      y=y+"  "
    }

    for(var t=1;t<=6-i;t++){
      y=y+" *"
    }
    console.log(y)
  }