const users = [
    { email: "john.doe@example.com", password: "password123" },
    { email: "jane.smith@example.com", password: "abc12345" },
    { email: "michael.brown@example.com", password: "mypassword1" },
    { email: "sarah.jones@example.com", password: "simplepass123" },
    { email: "david.clark@example.com", password: "pass1234" }
  ];
  var mails=[]
  for(i=0;i<users.length;i++){
    var x=users[i].email
    mails.push(x)
  }
  var uemail="sarah.jones@example.com"
  console.log(mails.includes(uemail));
  

