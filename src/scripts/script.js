async function GetUser(username){
    return await (await fetch("https://api.github.com/users/"+username)).json();
}

var user = GetUser("BrianCai35"); //async function always returns promise need fix later
console.log(user);